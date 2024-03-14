import Avatar from "@/_ui/profile/avatar";
import authStore from "@/store/auth-store";
import { Button } from "@/stories/ui/Button/Button";
import { GravatarUrl } from "@/utils/Gravatar";
import { shortenEthAddress } from "@/utils/ethaddress";
import {
  useConnect,
  useAccount,
  useDisconnect,
  useNetwork,
} from "@starknet-react/core";
import { useEffect } from "react";
// import { useAccount } from "@starknet-react/core";

function Wallets() {
  const { connect, connectors } = useConnect();
  // const { account, address, status } = useAccount();

  // console.log(
  //   "starknet",
  //   connectors,
  //   "account:",
  //   account,
  //   "address:",
  //   address,
  //   status
  // );
  // //
  return (
    <div className="flex justify-center items-center text-center  w-full ">
      {connectors.map((connector) => (
        <div className="mx-2 " key={connector.id}>
          <button
            className=" bg-gradient-to-r from-orange-600 to-red-900 p-4 rounded-md px-10 font-bold uppercase"
            onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        </div>
      ))}
    </div>
  );
}
export function shortenString(inputString, maxLength) {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.substring(0, maxLength);
  }
}

export default function StarknetWallet() {
  const { account, address, status } = useAccount();
  const { chain } = useNetwork();
  const { profiles, addProfile } = authStore();
  const { disconnect } = useDisconnect();
  // console.log("account:", account, "address:", address, status);
  //use hooks to set value on store Auth

  // I NEED TO DEFINE THE CHAIN STARKNET

  // profile add to store if hvent
  useEffect(() => {
    if (!account) return;

    const checkLoggedIn = () => {
      const hasRecorded = profiles?.some(
        (network) => network.type === "starknet"
      );

      if (!hasRecorded && account) {
        addProfile([
          ...profiles,
          {
            type: "starknet",
            address,
            chain,
          },
        ]);
      }
    };

    checkLoggedIn();
  }, [profiles, address]);

  //remove from authStore
  const handleDisconnect = async () => {
    //
    disconnect();
    const rmProfile = profiles.filter((network) => network.type !== "starknet");
    addProfile(rmProfile);
  };

  return (
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 p-4  my-2 rounded-md">
      <div className="text-center font-bold uppercase">Starknet</div>
      {/* account or not? */}
      <div className=" p-4 ">
        {account ? (
          <div className="flex font-medium w-full  justify-between ">
            <Avatar imageUrl={GravatarUrl(shortenString(address, 42))} />
            <div className="flex-col mx-4 ">
              <div className="mb-2">{shortenEthAddress(address)}</div>

              <div>{chain?.name}</div>
              {/* network */}
              {/* connected */}
              {/* <div>Disc</div> */}
            </div>
            <Button onClick={handleDisconnect} label="Disconnect" />
          </div>
        ) : (
          <Wallets />
        )}
      </div>
    </div>
  );
}
