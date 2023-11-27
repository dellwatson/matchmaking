import useStore from "@/_game/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function ModalPass({
  isOpen = false,
  setIsOpen = () => {},
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-600 min-h-[400px] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 text-gray-200 font-bold"
                  >
                    {/* GET YOUR DAILY FREE CLAIM */}
                    SEASON PASS <span className="text-red-500">(INACTIVE)</span>
                  </Dialog.Title>
                  <br />
                  <br />
                  <div>
                    Unlock boundless adventures with our exclusive NFT Season
                    Pass! Valid for one month{" "}
                    <span className="text-red-500">(5mins on prototype)</span>,
                    this pass grants you unrestricted access to dimension space
                    without the need for tickets. Every match within this
                    celestial realm brings the chance to discover rare drop
                    items, enhancing your gameplay and elevating your cosmic
                    journey. Seize the opportunity to maximize your exploration,
                    as each passing season promises fresh challenges and
                    valuable rewards. Your ticket to limitless exploration
                    awaits with the NFT Season Pass!
                  </div>
                  <br />
                  <br />

                  <div>Get it in the shop!</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
