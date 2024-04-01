import { Title } from "@/_ui/Typography";
import { TitlePage } from "@/components/lobby/interfaces/LobbyTop";
import React from "react";
import Warning from "./Announcement/Warning";

export default function WrapperInterface({ children }) {
  return (
    <div className="absolute">
      {/* Announcement */}
      <div className="absolute w-full h-full z-10 flex justify-center items-center">
        {/* <Warning /> */}
      </div>

      {/* header */}
      <div className="absolute mt-4 xl:ml-4 p-2 z-10 ">
        <Title className=" tracking-[3px]  !font-thin !text-xl">
          X Distance
        </Title>
        {/* &nbsp; &nbsp; &nbsp; */}
        <Title className=" tracking-[3px]  !font-thin !text-xl">
          X Collected
        </Title>
        <Title className=" tracking-[3px]  !font-thin !text-xl">X Speed</Title>
      </div>
      <div className="absolute  z-10 w-full flex justify-center xl:mt-2">
        <div className="absolute mt-4">
          <Title className="uppercase tracking-[10px]  !font-thin !text-2xl">{`Zone A`}</Title>
        </div>
        <SVGHeader />
      </div>
      {children}
      <div className="absolute z-10 bottom-0 px-2 capitalize !font-thin">
        control: keyboard
      </div>
    </div>
  );
}

const SVGHeader = () => (
  <svg
    data-v-df4a51a1=""
    width="513"
    height="61"
    fill="none"
    viewBox="0 0 513 61"
    aria-hidden="true"
    className="backBtn__bg">
    <defs data-v-df4a51a1="">
      {/* <linearGradient
        data-v-df4a51a1=""
        id="ijyz3xccj"
        x1="256.75"
        x2="256.75"
        y1="68.5"
        y2="17"
        gradientUnits="userSpaceOnUse">
        <stop data-v-df4a51a1="" stopColor="#030321"></stop>
        <stop
          data-v-df4a51a1=""
          offset="1"
          stopColor="#050521"
          stopOpacity="0"></stop>
      </linearGradient> */}
    </defs>
    <path
      data-v-df4a51a1=""
      className="backBtn__bgStroke"
      stroke="#fff"
      d="M33 47h35.9a15 15 0 0 1 7.63 2.086l14.94 8.828A15 15 0 0 0 99.1 60h311.8c2.685 0 5.32-.72 7.631-2.086l14.94-8.828a14.998 14.998 0 0 1 7.63-2.086H477"
      opacity=".2"></path>
    <path
      data-v-df4a51a1=""
      fill="url(#ijyz3xccj)"
      d="M68.9 47H33L15.754 20.733C9.204 10.758 16.36-2.5 28.293-2.5h455.25c12.26 0 19.342 13.908 12.131 23.823L477 47h-35.899c-2.685 0-5.32.72-7.631 2.086l-14.94 8.828A14.998 14.998 0 0 1 410.899 60H99.101a15 15 0 0 1-7.631-2.086l-14.94-8.828A15 15 0 0 0 68.9 47Z"
      opacity=".6"></path>
  </svg>
);
