import React from "react";
import Card from "../_ui/card";

// type or channel: ship | tools | abilities | resources
export default function CardList({ type = "", data = [1, 1, 1, 1, 1, 1, 1] }) {
  return (
    <div className="border grid xl:grid-cols-4  grid-cols-3 gap-4 ">
      {data?.map((item, i) => (
        <Card {...{ item }} key={i} />
      ))}
    </div>
  );
}
