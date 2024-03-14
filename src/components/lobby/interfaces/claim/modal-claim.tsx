import useStore from "@/_game/store";
import useTX from "@/helpers/hooks/useTX";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { CHAIN_ID, CLAIM_MANAGER, TOKEN_GEM } from "@/web3/contract-list";
import NetworkSelect from "@/_ui/select/NetworkSelect";
import { useTXStarknet } from "@/helpers/hooks/useTXStarknet";
import networkStore from "@/store/network-store";

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
            leaveTo="opacity-0">
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
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-200">
                    GET YOUR DAILY FREE CLAIM
                  </Dialog.Title>
                  <br />
                  <NetworkSelect />
                  <br />
                  <br />
                  {/* <div className="my-2">
                    <p className="text-sm text-gray-500">
                      *This is just prototype claim
                    </p>
                  </div> */}
                  <GemClaim />
                  <TicketClaim />
                  <PointsClaim />
                  {/* <div className="flex w-full justify-between py-3 ">
                    <div></div>
                    <button disabled>Claim All</button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// uint256[] memory contractIndices,
// uint256[] memory amounts,
// uint256[] memory ids
const _X =
  import.meta.env.VITE_SECOND === "true" ? [[1], [1], [0]] : [[5], [1], [0]];

//
const TicketClaim = ({ isStarknet = false }) => {
  const { selectedNetwork } = networkStore();

  const { address } = useAccount();
  const { data, write, isLoading, isSuccess } = useTX(
    CLAIM_MANAGER,
    "claim",
    _X
  );

  const { writeAsync, data: dataStarknet, isPending } = useTXStarknet();
  console.log(dataStarknet, isPending, "STARKNET CLAIM TICKET");

  useEffect(() => {
    if (isSuccess) {
      // alert(data?.hash);
      toast(`hash: ${data?.hash}`);
      // refresh balance
    }
  }, [isSuccess]);

  return (
    <div className="flex w-full justify-between py-3 border-b-1">
      <div>1 Realm Ticket {selectedNetwork?.name}</div>
      <button
        disabled={isLoading}
        onClick={async () => {
          toast("Making transaction");
          if (isStarknet) {
            // writeStarknet?.();
            writeAsync();
          } else {
            write?.();
          }
        }}>
        {isLoading ? "loading" : "Claim"}
      </button>
    </div>
  );
};

const GemClaim = () => {
  const { address } = useAccount();
  const { data, write, isLoading, isSuccess } = useTX(TOKEN_GEM, "mintToken", [
    address,
    100,
  ]);
  useEffect(() => {
    if (isSuccess) {
      // alert(data?.hash);
      toast(`hash: ${data?.hash}`);
      // refresh balance
    }
  }, [isSuccess]);
  //
  return (
    <div className="flex w-full justify-between py-3 border-b-1">
      <div>100 fUSD (fake USD)</div>
      <button
        disabled={isLoading}
        onClick={async () => {
          toast("Making transaction");
          write?.();
        }}>
        {isLoading ? "loading" : "Claim"}
      </button>
    </div>
  );
};
const _POINTS =
  import.meta.env.VITE_SECOND === "true"
    ? [[5], [200], [0]]
    : [[1], [200], [0]];
const PointsClaim = () => {
  const { address } = useAccount();
  const { data, write, isLoading, isSuccess } = useTX(
    CLAIM_MANAGER,
    "claim",
    _POINTS
  );
  useEffect(() => {
    if (isSuccess) {
      // alert(data?.hash);
      toast(`hash: ${data?.hash}`);
      // refresh balance
    }
  }, [isSuccess]);
  return (
    <div className="flex w-full justify-between py-3 border-b-1">
      <div>200 Points</div>
      <button
        disabled={isLoading}
        onClick={async () => {
          toast("Making transaction");
          write?.();
        }}>
        {isLoading ? "loading" : "Claim"}
      </button>
    </div>
  );
};
