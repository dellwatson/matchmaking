import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import usePathStore from "./store"; // Adjust the path to your store file
import useStore from "@/_game/store";
import useMessageStore from "@/_game/hud/Message/store";

const LinePath = ({ pathLength = 4000, segments = 200, scale = 10 }) => {
  const { setWarningLineDistance } = useMessageStore();
  const { setGameOver } = useStore();
  const points = usePathStore((state) => state.points);
  const generatePoints = usePathStore((state) => state.generatePoints);
  const getPlayerDistanceToPath = usePathStore(
    (state) => state.getPlayerDistanceToPath
  );
  const playerRef = useStore((state) => state.ship); // Ensure `useStore` is defined or imported correctly

  useEffect(() => {
    generatePoints(pathLength, segments, scale);
  }, [generatePoints, pathLength, segments, scale]);

  useFrame(() => {
    if (!playerRef?.current) return;

    const playerPosition = playerRef.current.position;
    const currentDistance = getPlayerDistanceToPath([
      playerPosition.x,
      playerPosition.y,
      playerPosition.z,
    ]);

    if (currentDistance <= 200) {
      //
      setWarningLineDistance(false);
    } else {
      setWarningLineDistance(true);
    }
    if (currentDistance > 400) {
      // game-over
      //
      setGameOver();
    }
  });

  if (!points.length) return null;

  return <Line points={points} color="lightgreen" lineWidth={3} />;
};

export default LinePath;
