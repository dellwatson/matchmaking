import React from "react";
import Card from "../_ui/card";
import {
  mocked_ammo,
  mocked_data,
  mocked_energy,
  mocked_pass,
  mocked_ticket,
} from "./mocked-product";

// type or channel: ship | tools | abilities | resources

export default function CardList({ page = "inventory", _data = [], tabs = 0 }) {
  const DATA = page === "inventory" ? _data[tabs] : SHOP_ARRAY[tabs];

  return (
    <div className=" grid xl:grid-cols-2 xl2:grid-cols-4  md:grid-cols-2 gap-1 xl:gap-4 overflow-y-scroll">
      {DATA?.map((item, i) => (
        <Card {...{ item, page }} key={i} />
      ))}
    </div>
  );
}

const SHOP_ARRAY = [
  mocked_data,
  [],
  [...mocked_ticket, ...mocked_ammo, ...mocked_energy],
  [...mocked_pass],
];
