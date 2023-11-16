import React, { useState } from "react";
import CardList from "./card-list";

// show BALANCE: TGEM/ LUKSO

export default function Shop() {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="border-2 w-full h-full border-red-500 pt-24 xl:px-6">
      <div className="border w-full h-full flex">
        <div className="">
          {["vehicle", "tools", "x", "x"].map((item, i) => (
            <div
              className={`p-6 cursor-pointer rounded-tl-md rounded-bl-md ${
                tabs === i ? "bg-slate-600" : ""
              }`}
              onClick={() => setTabs(i)}
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="border w-full p-6 bg-slate-600 rounded-tr-md rounded-br-md">
          <CardList />
        </div>
      </div>
    </div>
  );
}

// NOTICE: MARKETPLACE SOON: LIST YOUR FOUND ITEM HERE
// blueprints
// human-space
