import React from "react";
import "./card-store.css";
import useMeasure from "react-use-measure";
// options: skew, normal, border
// promo,
export default function CardStore({ children, props }) {
  // const [ref, bounds] = useMeasure();

  return (
    <div
      // onclick navigate?
      // ref={ref}
      className="  xl:h-[600px] w-[360px]  border xl:m-10 md:4 bg-[#B048FE]"
      {...props}>
      <div className="flex  flex-col justify-between h-full">
        {/* {children} */}
        {/* Image */}
        {/* <div>HEADER time left</div> */}
        <div className="p-4 text-center font-bold text-xl border">
          {props?.title || "TITLE"}
        </div>
        <div>
          {/* 3d or image? */}
          Image full or not
        </div>
        {/* <div>promo</div> */}
        <div className="p-4 text-center font-bold text-xl border">
          Coins, 2 coins?
        </div>
      </div>
    </div>
  );
}
