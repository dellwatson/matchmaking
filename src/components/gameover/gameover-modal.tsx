import useStore from "@/_game/store";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import ItemDrop from "./item-drop";
import useStatStore from "@/_game/hud/Stats/store";
import { calculateScore } from "@/_game/hud/Stats/Score/calculationScore";
import Prize from "./prize";

export default function GameOverModal({ closeModal = () => {} }) {
  const game_over = useStore((s) => s?.game_over);
  const { ship, collect, crashes, endTime, startTime } = useStore();
  // const {  } = useStatStore();
  const [countdown, setCountdown] = useState(20);
  const navigate = useNavigate();

  useEffect(() => {
    if (game_over) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [game_over]);

  // useEffect(() => {
  //   if (countdown === 0) {
  //     // Redirect to home page when countdown reaches 0
  //     // reset zustand
  //     // host end playroom game
  //     navigate("/");
  //   }
  // }, [countdown]);

  return (
    <>
      <Transition
        appear
        show={!!game_over}
        // show
        as={Fragment}>
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
                    </Dialog.Title>
                  </div>

                  <div className="text-center my-4 w-full ">
                    <div>??? ITEM DROP ???</div>
                    <br />
                    <ItemDrop
                      {...{
                        items: new Array(collect).fill(1),
                      }}
                    />
                    <br />
                    *Mint them on the claim page
                    {/* <Prize /> */}
                  </div>

                  <div className="flex justify-between w-full border p-10 my-10">
                    <div className="w-full">
                      Collected: {collect}
                      <br />
                      <br />
                      Crashes: {crashes}
                      <br />
                    </div>
                    <div className="w-full">
                      Time: {Math.round((endTime - startTime) / 1000)}s
                      <span className="text-green-400 text-xl"></span>
                      <br />
                      <br />
                      Score:{" "}
                      {calculateScore(
                        ship?.current?.position?.z,
                        endTime - startTime,
                        crashes,
                        collect
                      )}
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Link to="/">
                      <button
                        type="button"
                        className="!text-white inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        disabled={countdown === 0} // Disable button when countdown reaches 0
                      >
                        Return to Lobby in {countdown}s
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
