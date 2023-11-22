import useStore from "@/_game/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function ModalClaim({
  isOpen,
  setIsOpen,
  closeModal = () => {},
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    GET YOUR DAILY FREE CLAIM
                  </Dialog.Title>
                  <div className="my-2">
                    <p className="text-sm text-gray-500">
                      *This is just prototype claim
                    </p>
                  </div>
                  <div className="flex w-full justify-between py-3 border-b-1">
                    <div>100 GEMS</div>
                    <button>Claim</button>
                  </div>
                  <div className="flex w-full justify-between py-3 border-b-1">
                    <div>1 Ticket</div>
                    <button>Claim</button>
                  </div>
                  <div className="flex w-full justify-between py-3 border-b-1">
                    <div>200 Points</div>
                    <button>Claim</button>
                  </div>
                  <div className="flex w-full justify-between py-3 ">
                    <div></div>
                    <button>Claim All</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
