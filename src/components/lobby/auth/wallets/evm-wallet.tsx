import React from "react";
import ModalConnect from "../modal-connect";

export default function EVMWallet() {
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-500 p-4  my-2 rounded-md  ">
      <div className="text-center font-bold uppercase ">EVM Compatible</div>
      <div className="flex p-4  rounded-md  justify-center  ">
        <ModalConnect />
        {/* CHain ID */}
      </div>
    </div>
  );
}
