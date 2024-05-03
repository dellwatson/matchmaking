import React, { useRef, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rockGLB from "../asset/obstacles/rock.gltf";
import useStore from "../store";
import { Box3, Vector3, Mesh, Material } from "three";

function ProceduralObstacleV2({
  modelUrl = rockGLB,
  numObstacles = 1,
  positionRange = { x: [-100, 200], y: [-100, 200], z: [300, 900] },
  scaleRange = { min: 0.1, max: 0.1, variability: 0.1 },
  recycleDistance = 2,
  collisionFn = () => {},
}) {
  const { scene } = useThree();
  const obstaclesRef = useRef([]);
  const playerPosition = useStore((s) => s?.ship);
  const model = useLoader(GLTFLoader, modelUrl);

  useEffect(() => {
    const loadedModel = model.scene;
    for (let i = 0; i < numObstacles; i++) {
      const obstacle = loadedModel.clone(true);
      obstacle.traverse((child) => {
        if (child.isMesh) {
          child.receiveShadow = true;
          child.material.roughness = 1;
          child.material.metalness = 0;
        }
      });
      resetObstaclePosition(obstacle);
      obstacle.visible = false; // Initially invisible, will be set visible on recycling
      scene.add(obstacle);
      obstaclesRef.current.push(obstacle);
    }
  }, [model, scene, numObstacles]); // Ensure this effect only runs once

  useFrame(() => {
    if (!playerPosition.current) return;
    const playerZ = playerPosition.current.position.z;

    obstaclesRef.current.forEach((obstacle, index) => {
      if (obstacle.position.z < playerZ - recycleDistance) {
        resetObstaclePosition(obstacle, playerPosition.current.position);
        obstacle.visible = true; // Make sure the obstacle is visible when recycled
        obstaclesRef.current[index].collided = false; // Reset collided flag when recycled
      }

      // Add rotation or any other animation if necessary
      if (!obstacle.userData.rotationSpeed) {
        // Initialize rotation speed and direction for each axis when first created or reset
        obstacle.userData.rotationSpeed = {
          x: (Math.random() - 0.05) * 0.01, // Speed between -0.1 and 0.1 radians per frame
          y: (Math.random() - 0.05) * 0.01,
          z: (Math.random() - 0.05) * 0.01,
        };
      }

      // Continuous rotation based on the stored rotation speeds
      obstacle.rotation.x += obstacle.userData.rotationSpeed.x;
      obstacle.rotation.y += obstacle.userData.rotationSpeed.y;
      obstacle.rotation.z += obstacle.userData.rotationSpeed.z;

      // Collision detection
      const obstacleBox = new Box3().setFromObject(obstacle);
      const playerBox = new Box3().setFromObject(playerPosition.current);

      if (obstacleBox.intersectsBox(playerBox) && !obstacle.collided) {
        obstaclesRef.current[index].collided = true; // Mark obstacle as collided
        collisionFn(); // Handle collision
      }
    });
  });

  function resetObstaclePosition(
    obstacle,
    playerPos = new Vector3(0, 0, 1000)
  ) {
    // Compute new random positions within the defined ranges
    const [xRange, yRange, zRange] = [
      positionRange.x,
      positionRange.y,
      positionRange.z,
    ];
    obstacle.position.set(
      Math.random() * (xRange[1] - xRange[0]) + xRange[0],
      Math.random() * (yRange[1] - yRange[0]) + yRange[0],
      playerPos.z + Math.random() * (zRange[1] - zRange[0]) + zRange[0]
    );
    // Randomly adjust scale
    const baseScale =
      Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
    obstacle.scale.set(
      baseScale,
      baseScale * (Math.random() * scaleRange.variability + 0.95),
      baseScale * (Math.random() * scaleRange.variability + 0.95)
    );
  }

  return null;
}

export default React.memo(ProceduralObstacleV2);
