import useStore from "@/_game/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Discord from "../community/discord";

export default function ModalSupport({
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Discord />
                  <br />
                  <br />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-300 text-center"
                  >
                    Give us your feedback❤️
                  </Dialog.Title>
                  <div className="flex justify-center mt-4">
                    <div className="my-2 flex-col w-2/3 items-end ">
                      <input
                        className="p-2 w-full min-h-40  mb-2"
                        // placeholder="your feedback here..."
                      />
                      <button className="text-center  bg-orange-900 p-2 w-1/3">
                        Send
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <div className="text-center w-2/3 font-thin text-white">
                      Subscribe us to receive free{" "}
                      <span className="text-yellow-500">
                        {" "}
                        exclusive pioneer items{" "}
                      </span>{" "}
                      and incoming whitelist date.
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="my-2 flex w-2/3">
                      <input className="p-2 w-full" placeholder="your email" />
                      <button className="text-center w-full bg-red-900">
                        Subscribe
                      </button>
                    </div>
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
