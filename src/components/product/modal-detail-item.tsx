import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Rarity from "@theras_labs/ui/src/utils/Rarity";
import ProgressBar from "@theras_labs/ui/src/utils/ProgressBar";
import Traits from "@theras_labs/ui/src/block/traits";
import { shortenEthAddress } from "@/utils/ethaddress";
import BuyProduct from "./buy-product";
import NetworkSelect from "@theras_labs/ui/src/select/NetworkSelect";
import InfoNetwork from "./info-network";
import { Listbox } from "@headlessui/react";
import { FaCircleChevronUp, FaCircleChevronDown } from "react-icons/fa6";
import networkStore from "@/store/network-store";

export default function ModalDetail({ data = {}, page = "inventory" }) {
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
        onClick={!data?.locked ? openModal : () => {}}
        className="rounded-md uppercase bg-black/50 px-4 py-2 text-sm font-thin text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {!data?.locked ? "VIEW MORE" : "out of stock"}
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
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full   items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full  xl:max-w-3/4 max-w-full  transform overflow-scroll rounded-2xl bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="header-modal flex justify-between items-center mb-4">
                    <NetworkSelect />

                    <Dialog.Title
                      as="h3"
                      className="text-xl  leading-6 text-gray-300 font-bold">
                      {data?.title || "TITLE"}
                    </Dialog.Title>
                    <div className="font-bold">
                      {data?.address && shortenEthAddress(data?.address)}
                    </div>
                    {/* <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button> */}
                  </div>
                  {/* <NetworkSelect /> */}

                  <div className="grid xl:grid-cols-2">
                    <div className="col-span-1 mt-16">
                      <div className="w-[400px] bg-black h-[400px]">
                        <img
                          src={data?.imageUrl}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className=" mt-4 max-w-[400px] flex overflow-x-scroll ">
                        {data?.allImages.map((item, i) => (
                          <div className="bg-black w-14 h-14 mr-4">
                            <img
                              src={item}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="">
                        <div className="uppercase bold">DESCRIPTION</div>

                        <p className="text-sm text-gray-200 font-thin max-w-[400px]">
                          {data?.description}
                        </p>
                      </div>
                      {/*  */}
                      <PurchaseOptions {...{ page, data }} />
                      <div className=" flex justify-between items-center mt-4">
                        <div className="w-full pr-6 uppercase ">Details: </div>
                        <div>
                          <Rarity />
                        </div>
                      </div>
                      <InfoNetwork />
                      {/*  */}
                      <div className=" flex justify-between my-4 capitalize">
                        <div className="w-full pr-6">
                          <div className="w-full grid grid-cols-2 ">
                            {data?.traits?.map((item, i) => (
                              <Traits key={i} {...item} />
                            ))}
                          </div>

                          <br />
                          {data?.status && (
                            <>
                              <ProgressBar title={"durability"} progress={50} />
                              <ProgressBar title={"control"} progress={40} />
                              <ProgressBar title={"luck"} progress={20} />
                            </>
                          )}
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

// change according to network
const TOKENS_PAYMENT = [
  {
    id: 1,
    name: "ART",
    unavailable: false,
    native: true,
    price: 0.025,
    weiValue: "0000000",
  },
  {
    id: 2,
    name: "fUSD",
    unavailable: false,
    address: "0x",
    price: 200,
    weiValue: "0000000",
  },
];

const TokenOptions = ({
  TOKEN_LIST = [],
  selectedPerson,
  setSelectedPerson,
  price = 25,
}) => {
  const { selectedNetwork } = networkStore();
  return (
    <div className=" rounded-md top-16 w-50 ">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <div className="relative bg-gray-900  p-2">
          <Listbox.Button>
            <span className="text-xl font-bold text-green-500">
              {price} &nbsp;
              {selectedPerson?.native
                ? selectedNetwork?.native
                : selectedPerson.name}{" "}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaCircleChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options>
              {TOKEN_LIST.map((token) => (
                <Listbox.Option
                  key={token.id}
                  value={token}
                  // disabled={price.unavailable}
                >
                  {({ active, selected }) => (
                    <li
                      className={` cursor-pointer ${
                        active || selected
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }`}>
                      {price} &nbsp;
                      {token?.native
                        ? selectedNetwork?.native
                        : token.name}{" "}
                    </li>
                  )}
                  {/* <div className="text-xl ">
              {token?.price} {token.name}{" "}
            </div> */}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export const PurchaseOptions = ({ page, data }) => {
  const [selectedPerson, setSelectedPerson] = useState(TOKENS_PAYMENT[0]);

  return (
    <div className="my-6 flex justify-between my-4 uppercase">
      <div>
        Total Supply
        <br />
        <span className="text-xl font-bold text-green-500">
          {data?.totalSupply}
        </span>
      </div>
      {page !== "inventory" && (
        <div className="text-center">
          Price
          <br />
          <TokenOptions
            {...{
              TOKEN_LIST: TOKENS_PAYMENT,
              selectedPerson,
              setSelectedPerson,
              price: data?.price[0]?.price,
            }}
          />
        </div>
      )}
      {page === "inventory" && (
        <button className="bg-green-500 p-4 rounded-md font-bold uppercase px-8">
          equipped
        </button>
      )}
      <div className="text-end">
        {page !== "inventory" && (
          <BuyProduct
            {...{
              product: data,
              tokenSelected: selectedPerson,
              price: data?.price[0]?.price,
            }}
          />
        )}
        {page === "inventory" && data?.stakeable && (
          <button
            onClick={() => {
              alert("Staking feature is not available yet");
            }}
            className="bg-orange-500 p-4 rounded-md font-bold uppercase px-8">
            "STAKE"
          </button>
        )}
      </div>
    </div>
  );
};
