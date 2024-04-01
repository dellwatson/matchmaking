import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

const LinePath = ({ pathLength = 4000, segments = 200, scale = 10 }) => {
  const noise3D = createNoise3D();
  const zIncrement = (pathLength / segments) * scale;

  const points = useMemo(() => {
    let points = [];
    let z = 0; // Starting Z position

    for (let i = 0; i <= segments; i++) {
      let x = noise3D(i * 0.05, i * 0.05, 0) * 30 * scale; // Apply scaling to noise output
      let y = noise3D(i * 0.05, 0, i * 0.05) * 30 * scale; // Apply scaling to noise output
      points.push(new THREE.Vector3(x, y, z));
      z += zIncrement; // Ensure forward movement
    }

    return points;
  }, [noise3D, segments, scale, zIncrement]);

  return <Line points={points} color="lightgreen" lineWidth={2} />;
};

export default LinePath;
