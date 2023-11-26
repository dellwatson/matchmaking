import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import ModalSupport from "./modal-support";
export default function Support() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        onClick={() => {
          openModal();
        }}
        className="border  mx-4 flex uppercase font-bold"
      >
        <div className="flex w-full justify-center items-center pr-2 text-green-500">
          <BiSupport className="mx-2" />
          Support
        </div>
        <div className="flex w-full bg-red-500 p-4 justify-center">
          subscribe
        </div>
      </div>
      <ModalSupport
        {...{
          isOpen,
          closeModal,
          openModal,
        }}
      />
    </>
  );
}
