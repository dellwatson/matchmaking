import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Rarity from "../_ui/utils/Rarity";
import ProgressBar from "../_ui/utils/ProgressBar";
import Traits from "../_ui/block/traits";

export default function ModalDetail({ data = {}, type = "shop" }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-black/50 px-4 py-2 text-sm font-medium text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        VIEW MORE
      </button>

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
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full xl:max-w-2/4 max-w-full  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="header-modal flex justify-between items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {data?.title || "TITLE"}
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                  <div className="grid xl:grid-cols-2">
                    <div className="col-span-1">
                      <div className="w-[400px] bg-black h-[400px]"></div>
                      <div className="border mt-4 max-w-[400px] flex overflow-x-scroll ">
                        {[1, 1, 1].map((item, i) => (
                          <div className="bg-black w-14 h-14 m-2"></div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="">
                        <div className="uppercase bold">DESCRIPTION</div>

                        <p className="text-sm text-gray-500 max-w-[400px]">
                          Your payment has been successfully submitted. We’ve
                          sent you an email with all of the details of your
                          order.
                        </p>
                      </div>

                      <div className="border flex justify-between my-4">
                        <div>Total Supply</div>
                        <div>
                          Price:
                          <br />
                          <div>BUY</div>
                        </div>
                      </div>
                      <div className="border flex justify-between my-4">
                        <div className="w-full pr-6">Details:</div>
                        <div>
                          <Rarity />
                        </div>
                      </div>
                      {/*  */}
                      <div className="border flex justify-between my-4">
                        <div className="w-full pr-6">
                          <Traits />
                          <Traits />
                          <Traits />
                          <br />
                          <ProgressBar />
                          <ProgressBar />
                          <ProgressBar />
                        </div>
                        <div className="w-1/3">
                          <Traits />
                          <Traits />
                          <Traits />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
