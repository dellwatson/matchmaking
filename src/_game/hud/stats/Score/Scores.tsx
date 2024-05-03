import useStore from "@/_game/store";
import { Title } from "@theras_labs/ui/src/Typography";
import React, { useMemo } from "react";
import useStatStore from "../store";
import { TOTAL_LENGTH_RACE } from "@/_game/system/gamestate";
import { calculateScore } from "./calculationScore";

export default function Scores() {
  const { ship, speed, crashes, collect, startTime } = useStore();
  const { speedScore, lineDistance } = useStatStore();

  // console.log(ship?.current?.position?.z);
  const positionZ = useMemo(
    () => Math.round(ship?.current?.position?.z),
    [ship?.current?.position?.z]
  );
  return (
    <div className="absolute mt-4 xl:ml-4 p-2 z-10  pt-20">
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        {/* distance %: {Math.round((positionZ / TOTAL_LENGTH_RACE) * 100)} */}
        distance: <strong className="text-green-400">{positionZ}</strong>
      </Title>
      {/* &nbsp; &nbsp; &nbsp; */}
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        line-distance:{" "}
        <strong className="text-green-400">{Math.round(lineDistance)}</strong>
      </Title>
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        crashes:
        <strong className="text-green-400">{crashes}</strong>
      </Title>
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        collected:
        <strong className="text-green-400">{collect}</strong>
      </Title>
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        speed:
        <strong className="text-green-400">
          {Math.round(speedScore * 100)}
        </strong>
      </Title>
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        time:
        <strong className="text-green-400">
          {" "}
          {Math.round((Date.now() - startTime) / 1000)}s
        </strong>
      </Title>
      <Title className=" tracking-[3px]  !font-thin !text-xl">
        scores:
        <strong className="text-green-400">
          {calculateScore(positionZ, Date.now() - startTime, crashes, collect)}
        </strong>
      </Title>
    </div>
  );
}
