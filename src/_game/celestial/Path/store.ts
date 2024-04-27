import { create } from "zustand";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

const usePathStore = create((set, get) => ({
  points: [],
  generatePoints: (pathLength, segments, scale) => {
    const noise3D = createNoise3D();
    const zIncrement = (pathLength / segments) * scale;
    const points = [];
    let z = 0;

    for (let i = 0; i <= segments; i++) {
      let x = noise3D(i * 0.05, i * 0.05, 0) * 30 * scale;
      let y = noise3D(i * 0.05, 0, i * 0.05) * 30 * scale;
      points.push(new THREE.Vector3(x, y, z));
      z += zIncrement;
    }

    set({ points });
  },
  getPlayerDistanceToPath: (playerPos, threshold = 10) => {
    const points = get().points;
    let minDistance = Infinity;
    for (let i = 0; i < points.length - 1; i++) {
      const segment = new THREE.Line3(points[i], points[i + 1]);
      const closestPoint = segment.closestPointToPoint(
        new THREE.Vector3(...playerPos),
        true,
        new THREE.Vector3()
      );
      const distance = closestPoint.distanceTo(new THREE.Vector3(...playerPos));
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
    return minDistance;
  },
}));

export default usePathStore;
