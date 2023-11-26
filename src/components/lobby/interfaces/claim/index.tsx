import CornerBox from "@/components/_ui/box/CornerBox";
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
      <div onClick={() => openModal()} className=" flex  mb-4 font-bold">
        <div className="bg-green-800 p-4 ">FREE CLAIMS</div>
        <div className="bg-blue-500 p-4 px-6">3</div>
      </div>

      <ModalClaim {...{ isOpen, setIsOpen, closeModal, openModal, data: [] }} />
    </div>
  );
}
