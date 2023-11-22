import React from "react";
import Rarity from "../utils/Rarity";
import ModalDetail from "@/components/product/modal-detail-item";

export default function Card(
  {
    //   title,
    //   imageUrl,
    //   rarity,
    //   type,
    //
  }
) {
  return (
    <div className="p-6 rounded-md ">
      <div className="text-center mb-4">TITLE BIG ASS</div>
      <div
        onClick={() => {}}
        className="
      cursor-pointer
      card  border rounded-xl border-red-500 text-center
       bg-black overflow-hidden"
      >
        <div className="w-full bg-green-500 min-h-50">image</div>

        <div className="flex items-center justify-center my-4">
          <Rarity />
        </div>
        <div className="p-6 uppercase">
          <ModalDetail {...{ data: null }} />
          {/* open modal | navigate to next */}
        </div>
      </div>
    </div>
  );
}
