import React, { useState } from "react";
import DetailProduct from "../product/detail";
import { Title } from "@theras_labs/ui/src/Typography";
import InventoryBox from "@theras_labs/ui/src/Box/InventoryBox";
import useInventory from "@/_core/hooks/useInventory";
// import useProfile from "@/_core/hooks/useProfile";

export default function ListInventory() {
  // inventory with accountID too
  const { data, isLoading } = useInventory();
  const [selected, setSelect] = useState(null);
  // const { isNetworkConnected } = useProfile();

  // const {} = useEquipments(accountId, network)
  // useSlotUser()
  return (
    <>
      <div className="grid xl:grid-cols-2  !overflow-scroll">
        <div className=" sticky">
          <div className=" border rounded-md border-gray-600 fixed md:h-5/6  h-5/6  xl:w-1/2 w-full overflow-y-scroll p-4 ">
            <div className=" p-2 grid grid-cols-2 xl:grid-cols-4  ">
              {!!data?.length &&
                data.map((item, i) => (
                  <InventoryBox
                    key={"item-inventory" + i}
                    {...{ ...item, selected, index: i }}
                    onClick={() => setSelect({ ...item, index: i })}
                    // equipped:
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="hidden xl:block visible bg-black ">
          {selected && (
            <DetailProduct
              {...{
                data: selected,
                page: "inventory",
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
