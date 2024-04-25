import CornerBox from "@theras_labs/ui/src/Box/CornerBox";
import { useState } from "react";
import ModalClaim from "./modal-claim";

export default function Claim() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative">
      <div
        onClick={() => openModal()}
        className=" flex mb-4 font-bold rounded-sm">
        <div className="relative  right-4 bottom-1 -rotate-10">
          <div className="animate-bounce bg-red-700 p-4 px-6 text-xl absolute rounded-full ">
            3
          </div>
        </div>
        <div className=" p-4 bg-gray-900 rounded-md border border-gray-600">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FREE CLAIMS &nbsp;
        </div>
      </div>

      <ModalClaim {...{ isOpen, setIsOpen, closeModal, openModal, data: [] }} />
    </div>
  );
}
