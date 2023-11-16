import React from "react";
import { useAccount } from "wagmi";
import ModalConnect from "./modal-connect";
import Profile from "./Profile";

// shows profile or shows button connect
export default function Auth() {
  const { address, isConnected } = useAccount();
  //   console.log(address, isConnected, "test");
  return (
    <div className="absolute">{!address ? <ModalConnect /> : <Profile />}</div>
  );
}
