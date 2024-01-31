import networkStore from "@/store/network-store";
import React from "react";

export default function InfoNetwork() {
  const { selectedNetwork } = networkStore();
  return (
    <div className="text-xs text-red-300">
      This NFT will be minted on {selectedNetwork && selectedNetwork?.name}
      , exploring on different network:
      <br />
      +50% more materials found
      <br />
      +50% more drop rate
      <br />
      +50% more durability
    </div>
  );
}
