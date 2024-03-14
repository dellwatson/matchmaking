import Avatar from "@/_ui/profile/avatar";
import useReadContract from "@/helpers/hooks/useReadContract";
import networkStore from "@/store/network-store";
import { GravatarUrl } from "@/utils/Gravatar";
import { TOKEN_GEM } from "@/web3/contract-list";
import { formatEther, formatUnits, parseEther } from "viem";
import { useAccount, useNetwork } from "wagmi";

export default function Profile() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useReadContract(TOKEN_GEM, "balanceOf", [
    address,
  ]);

  const { chain } = useNetwork();
  const { selectedNetwork } = networkStore();

  return (
    <div className="flex">
      {/* profiles */}
      {/* profile, notif, inventory? 0x , tokens */}
      {/* <w3m-network-button /> */}

      <Avatar imageUrl={GravatarUrl(address)} />
      <div className="ml-4 flex flex-col justify-center">
        <w3m-account-button balance="hide" />
        <div className="mt-1 text-center">
          fUSD: &nbsp;
          <span className="font-bold text-green-300">
            {!isLoading && data ? formatUnits(data, 18) : "-"}
          </span>
          <br />
          {chain?.id !== Number(selectedNetwork.chainId) && "wrong network"}
        </div>
      </div>
    </div>
  );
}
