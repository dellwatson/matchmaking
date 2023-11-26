import React, { useState } from "react";
import CardList from "./card-list";

// show BALANCE: TGEM/ LUKSO
export default function ProductDisplay({ page = "inventory" }) {
  const [tabs, setTabs] = useState(0);
  const [visible, setVisible] = useState(true);
  return (
    <div className=" w-full h-full border-red-500 pt-24 xl:px-6">
      {visible && page !== "inventory" && (
        <div className="bg-yellow-600 font-bold uppercase p-4 rounded-md mb-2 flex justify-between  text-red-800">
          <span className="">PROTOTYPE NOTE:</span>
          marketplace is on DESIGN REWORK. once it's ready, you can auction the
          item you found in the game here too :)
          <div
            onClick={() => setVisible(false)}
            className="text-white cursor-pointer"
          >
            close
          </div>
        </div>
      )}
      <div className=" w-full h-full flex">
        <div className="uppercase font-bold">
          {["vehicle", "skins", "consumption", "tools"].map((item, i) => (
            <div
              className={`p-6 xl-w-[300px] cursor-pointer rounded-tl-md rounded-bl-md  ${
                tabs === i ? "bg-slate-600" : "rounded-md"
              }`}
              onClick={() => setTabs(i)}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" w-full p-6 bg-slate-600 rounded-tr-md rounded-br-md">
          <CardList {...{ page }} />
        </div>
      </div>
    </div>
  );
}

// NOTICE: MARKETPLACE SOON: LIST YOUR FOUND ITEM HERE
// blueprints
// human-space
