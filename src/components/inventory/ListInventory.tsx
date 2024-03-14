import React from "react";
import DetailProduct from "../product/detail";
import { Title } from "@/_ui/Typography";
import InventoryBox from "@/_ui/Box/InventoryBox";

export default function ListInventory() {
  return (
    <>
      <div className="grid xl:grid-cols-2  !overflow-scroll">
        <div className=" sticky">
          <div className=" border rounded-md border-gray-600 fixed h-2/3 xl:w-1/2 w-full overflow-y-scroll p-4 ">
            <Title className="fixed mb">Inventory</Title>
            <div className="  mt-12 grid grid-cols-3 xl:grid-cols-4 ">
              {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 11,
              ].map((item, i) => (
                <InventoryBox />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden xl:block visible bg-black ">
          <DetailProduct
            page="inventory"
            //       {...{
            //       data
            //   }}
          />
        </div>
      </div>
    </>
  );
}
