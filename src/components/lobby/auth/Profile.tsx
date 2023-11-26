import Avatar from "@/components/_ui/profile/avatar";
import { GravatarUrl } from "@/utils/Gravatar";
import { useAccount } from "wagmi";

export default function Profile() {
  const { address } = useAccount();
  return (
    <div className="flex">
      {/* profiles */}
      {/* profile, notif, inventory? 0x , tokens */}
      {/* <w3m-network-button /> */}

      <Avatar imageUrl={GravatarUrl(address)} />
      <div className="ml-4 flex flex-col justify-center">
        <w3m-account-button balance="hide" />
        <div className="mt-1 text-center">
          GEMS: &nbsp;
          <span className="font-bold text-green-300">200</span>
        </div>
      </div>
    </div>
  );
}
