import useStore from "@/_game/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ItemDrop from "./item-drop";

export default function GameOverModal({ closeModal = () => {} }) {
  const game_over = useStore((s) => s?.game_over);
  const ship = useStore((s) => s?.ship);
  // turn on sound

  return (
    <>
      <Transition appear show={!!game_over} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black" />
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
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900">
                      GAME OVER
                      {/* FINISH */}
                    </Dialog.Title>
                    {/* <div className="mt-2">
                      <p className="text-sm text-gray-500 text-orange-600">
                        Thank you for trying the PROTOTYPE
                      </p>
                    </div> */}
                  </div>

                  <div className="text-center my-4 ">
                    ITEM FOUND: ∞
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>??? ITEM DROP ???</div>
                    <br />
                    <ItemDrop />
                  </div>
                  <div className="flex justify-between w-full border p-10 my-10">
                    <div className="w-full">
                      Collected:
                      <br />
                      <br />
                      Crashes: ∞
                      <br />
                    </div>
                    <div className="w-full">
                      {/* sldier */}
                      Time:{" "}
                      <span className="text-green-400 text-xl">
                        {/* {Math.round(ship?.current?.position?.z / 10) || "∞"} */}
                      </span>
                      <br />
                      <br />
                      {/* Max Speed: Level: */}
                      Rank: ∞
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Link to="/">
                      <button
                        type="button"
                        className="!text-white inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Return to Lobby in 20s
                      </button>
                    </Link>
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
