import React from "react";
import { useAccount } from "wagmi";
import ModalConnect from "./modal-connect";
import Profile from "./Profile";
import StarknetWallet, { shortenString } from "./wallets/starknet-wallet";
import authStore from "@/store/auth-store";
import ModalAuth from "./modal-auth";
import { Button } from "@/stories/ui/Button/Button";
import Avatar from "@/components/_ui/profile/avatar";
import { GravatarUrl } from "@/utils/Gravatar";
import { shortenEthAddress } from "@/utils/ethaddress";

// shows profile or shows button connect
export default function Auth() {
  const { address, isConnected } = useAccount();
  // console.log(address, isConnected, "test");

  const { profiles, setModalReveal } = authStore();

  return (
    <div className="absolute">
      {/* wallet */}
      {/* if !auth.length  OPEN MODAL BUTTON else: Profiles */}
      {!profiles?.length ? (
        <>
          <Button
            label="CONNECT"
            primary
            backgroundColor="black"
            // size="large"
            onClick={() => setModalReveal(true)}
          />
        </>
      ) : (
        <div>
          {/* Profiles stack */}
          {profiles?.map((item, i) => (
            //absolute? gravatar
            <div onClick={() => setModalReveal(true)} key={i}>
              <div className="flex font-medium w-full  justify-between ">
                <Avatar
                  imageUrl={GravatarUrl(shortenString(item?.address, 42))}
                />
                <div className="flex-col mx-4 ">
                  <div className="mb-2">{shortenEthAddress(item?.address)}</div>

                  <div>{item?.chain?.name}</div>
                  {/* network */}
                  {/* connected */}
                  {/* <div>Disc</div> */}
                </div>
              </div>
            </div>
          ))}
          {/* click to show modal */}
        </div>
      )}
      <ModalAuth />
      {/* 
      <div className="absolute">
        {!address ? <ModalConnect /> : <Profile />}
      </div> */}
    </div>
  );
}
