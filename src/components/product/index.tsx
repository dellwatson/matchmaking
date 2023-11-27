import React, { useState } from "react";
import CardList from "./card-list";
import {
  mocked_data,
  mocked_default,
  mocked_pass,
  mocked_ticket,
} from "./mocked-product";

// show BALANCE: TGEM/ LUKSO
export default function ProductDisplay({
  page = "inventory",
  data = { ship: 0, pass: 0, ticket: 0 },
}) {
  console.log(data, "product Display");

  const [tabs, setTabs] = useState(0);
  const [visible, setVisible] = useState(true);

  const _shipTotal = [
    ...mocked_default,
    ...(data?.ship
      ? Array.from({ length: data.ship }, () => ({ ...mocked_data[0] }))
      : []),
  ];
  const _passTotal = [
    ...(data?.pass
      ? Array.from({ length: data.pass }, () => ({ ...mocked_pass[0] }))
      : []),
  ];
  const _ticketTotal = [
    ...(data?.ticket
      ? Array.from({ length: data.ticket }, () => ({ ...mocked_ticket[0] }))
      : []),
  ];
  const DATA_INVENTORY = [_shipTotal, [], _ticketTotal, _passTotal];
  const COLOR_bg = page === "inventory" ? "bg-green-800" : "bg-slate-600";
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
                tabs === i ? COLOR_bg : "rounded-md"
              }`}
              onClick={() => setTabs(i)}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={` w-full p-6 ${COLOR_bg} rounded-tr-md rounded-br-md min-h-[500px]`}
        >
          <CardList {...{ page, tabs, _data: DATA_INVENTORY }} />
        </div>
      </div>
    </div>
  );
}

// NOTICE: MARKETPLACE SOON: LIST YOUR FOUND ITEM HERE
// blueprints
// human-space
