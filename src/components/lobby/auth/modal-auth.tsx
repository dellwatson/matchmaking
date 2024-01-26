import useStore from "@/_game/store";
import authStore from "@/store/auth-store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ModalConnect from "./modal-connect";
import StarknetWallet from "./wallets/starknet-wallet";
import EVMWallet from "./wallets/evm-wallet";

export default function ModalAuth({}) {
  const { isModalReveal, setModalReveal } = authStore();
  const closeModal = () => {
    setModalReveal(false);
  };
  return (
    <>
      <Transition appear show={isModalReveal} as={Fragment}>
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
            <div className="fixed inset-0 backdrop-blur" />
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
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="">
                    {/* <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-300 mb-2  text-center"
                    >
                      Connect to your preferred network
                    </Dialog.Title> */}
                    <div className="min-h-100">
                      {/* EVM */}
                      <EVMWallet />

                      {/* Starknet */}
                      <StarknetWallet />

                      {/* Substrate */}
                      {/* Solana */}
                    </div>

                    {/* <div className="mt-2">
                      <p className="text-sm text-gray-500 text-orange-600">
                        Thank you for trying the PROTOTYPE
                      </p>
                    </div> */}
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

// const Wallets = () => {
//   return <div></div>;
// };
