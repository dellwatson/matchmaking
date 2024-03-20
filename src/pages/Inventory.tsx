import ListInventory from "@/components/inventory/ListInventory";
import Layout from "@/components/lobby/LayoutHeader";
import React from "react";

export default function Inventory() {
  return (
    <div className="bg-slate-900  !overflow-x-hidden  w-full ">
      <Layout />
      {/* BACK BUTTON */}
      <div className="mt-28 xl:mx-4  ">
        {/* <Detail /> */}
        <ListInventory />
        {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 11].map((item, i) => (
          <div className="m-10 h-[100px] w-40 bg-red-500">{i}</div>
        ))} */}
      </div>
    </div>
  );
}
