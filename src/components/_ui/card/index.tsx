import React from "react";
import Rarity from "../utils/Rarity";
import ModalDetail from "@/components/product/modal-detail-item";

export default function Card({
  item,
  page,
  //   title,
  //   imageUrl,
  //   rarity,
  //   type,
  //
}) {
  return (
    <div className="p-6 rounded-md ">
      <div className="text-center mb-4 font-bold text-xl">{item?.title}</div>
      <div
        onClick={() => {}}
        className="
      cursor-pointer
      card   rounded-xl border-red-500 text-center
       bg-slate-800 overflow-hidden"
      >
        <div className="relative w-full  h-80">
          {page !== "inventory" && (
            <div className="absolute bottom-0 right-0 m-4 text-xl font-bold text-green-600 z-10">
              {item?.price[0]?.price} {item?.price[0]?.payment_token}{" "}
            </div>
          )}
          <img
            src={item?.imageUrl}
            className="w-full h-full object-cover opacity-75"
          />
        </div>

        <div className="flex items-center justify-center my-4">
          <Rarity />
        </div>
        <div className="p-6 uppercase">
          <ModalDetail {...{ data: item, page }} />
          {/* open modal | navigate to next */}
        </div>
      </div>
    </div>
  );
}
