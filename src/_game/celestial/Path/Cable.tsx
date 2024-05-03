import useStore from "@/_game/store";
import { QuadraticBezierLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import usePathStore from "./store";

// color
export default function Cable({}) {
  const { ship } = useStore();
  const { points } = usePathStore();

  return (
    <>
      <ConnectCable start={ship} end={points} />
    </>
  );
}

function ConnectCable({
  start, // Ref for the spaceship
  end, // Path points
  v1 = new THREE.Vector3(),
  v2 = new THREE.Vector3(),
}) {
  const ref = useRef();

  useFrame(() => {
    if (!start.current) return;

    // Get the current position of the spaceship
    const spaceshipPosition = start.current.position;

    // Find the two points on the path closest to the spaceship's z-coordinate
    let startIndex = 0;
    let endIndex = end.length - 1;

    for (let i = 0; i < end.length - 1; i++) {
      if (
        end[i].z <= spaceshipPosition.z &&
        end[i + 1].z >= spaceshipPosition.z
      ) {
        startIndex = i;
        endIndex = i + 1;
        break;
      }
    }

    // Interpolate the x and y coordinates between the two closest points on the path
    const t =
      (spaceshipPosition.z - end[startIndex].z) /
      (end[endIndex].z - end[startIndex].z);
    const interpolatedX =
      end[startIndex].x + t * (end[endIndex].x - end[startIndex].x);
    const interpolatedY =
      end[startIndex].y + t * (end[endIndex].y - end[startIndex].y);

    // Set the points of the cable line
    ref.current.setPoints(
      spaceshipPosition,
      new THREE.Vector3(interpolatedX, interpolatedY, spaceshipPosition.z)
    );
  });

  return <QuadraticBezierLine ref={ref} lineWidth={1} color="#ff2060" />;
}
