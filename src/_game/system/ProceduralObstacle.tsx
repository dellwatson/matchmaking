import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rockGLB from "../asset/obstacles/rock.gltf";
import useStore from "../store";

// level increasing
// level size
function ProceduralObstacle({
  modelUrl = rockGLB,
  numObstacles = 200,
  positionRange = { x: [500, 800], y: [500, 800], z: [200, 3000] },
  scaleRange = { min: 100, max: 200, variability: 0.1 },
  recycleDistance = 50,
}) {
  const { scene } = useThree();
  const obstaclesRef = useRef([]);
  const playerPosition = useStore((s) => s?.ship);
  const model = useLoader(GLTFLoader, modelUrl);

  useLayoutEffect(() => {
    const loadedModel = model.scene;

    for (let i = 0; i < numObstacles; i++) {
      const obstacle = loadedModel.clone(true);
      obstacle.traverse((child) => {
        if (child.isMesh) {
          // child.castShadow = true;
          child.receiveShadow = true;
          // Apply roughness and metalness to the material
          child.material.roughness = 1;
          child.material.metalness = 1;
        }
      });
      const [xRange, yRange, zRange] = [
        positionRange.x,
        positionRange.y,
        positionRange.z,
      ];
      obstacle.position.set(
        Math.random() * (xRange[1] - xRange[0]) + xRange[0],
        Math.random() * (yRange[1] - yRange[0]) + yRange[0],
        Math.random() * (zRange[1] - zRange[0]) + zRange[0]
      );
      obstacle.visible = false;
      scene.add(obstacle);
      obstaclesRef.current.push(obstacle);
    }
  }, [model, scene, numObstacles, positionRange]);

  useFrame((_) => {
    if (!playerPosition.current) return;
    const playerZ = playerPosition.current.position.z;

    obstaclesRef.current.forEach((obstacle, index) => {
      if (obstacle.position.z < playerZ - recycleDistance) {
        obstacle.position.set(
          playerPosition.current.position.x + (Math.random() - 0.5) * 1000,
          playerPosition.current.position.y + (Math.random() - 0.5) * 1000,
          playerZ + (Math.random() * 200 + 500)
        );

        const baseScale =
          Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
        obstacle.scale.set(
          baseScale,
          baseScale * (Math.random() * scaleRange.variability + 0.95),
          baseScale * (Math.random() * scaleRange.variability + 0.95)
        );
        obstacle.visible = true;
      }

      const elapsedTime = _.clock.getElapsedTime();
      const r = Math.cos(elapsedTime * 0.5) * Math.PI + index;
      obstacle.rotation.set(r, r, r);
    });
  });

  return null;
}

export default React.memo(ProceduralObstacle);
