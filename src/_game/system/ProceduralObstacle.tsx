import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rockGLB from "../asset/obstacles/rock.gltf";
import useStore from "../store";
import { Box3, Vector3 } from "three";
import * as THREE from "three";

// level increasing
// level size
function ProceduralObstacle({
  modelUrl = rockGLB,
  numObstacles = 1,
  positionRange = { x: [-100, 200], y: [-100, 200], z: [300, 900] },
  // scaleRange = { min: 40, max: 100, variability: 0.1 },
  scaleRange = { min: 0.1, max: 0.1, variability: 0.1 },
  // scaleRange = { min: 200, max: 240, variability: 0.1 },
  recycleDistance = 2,
  // recycleDistance = 50,
  collisionFn = () => {},
  // callback for
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

  // useFrame((_) => {
  //   if (!playerPosition.current) return;
  //   const playerZ = playerPosition.current.position.z;

  //   const shipBoundingBox = new Box3().setFromObject(playerPosition.current);
  //   shipBoundingBox.expandByScalar(-0.2); // Adjust the scalar value as needed

  //   obstaclesRef.current.forEach((obstacle, index) => {
  //     if (obstacle.position.z < playerZ - recycleDistance) {
  //       obstacle.position.set(
  //         playerPosition.current.position.x + (Math.random() - 0.5) * 1000,
  //         playerPosition.current.position.y + (Math.random() - 0.5) * 1000,
  //         playerZ + (Math.random() * 200 + 500)
  //       );

  //       const baseScale =
  //         Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
  //       obstacle.scale.set(
  //         baseScale,
  //         baseScale * (Math.random() * scaleRange.variability + 0.95),
  //         baseScale * (Math.random() * scaleRange.variability + 0.95)
  //       );
  //       obstacle.visible = true;
  //     }

  //     const elapsedTime = _.clock.getElapsedTime();
  //     const r = Math.cos(elapsedTime * 0.05) * Math.PI + index;
  //     obstacle.rotation.set(r, r, r);

  //     // Collision detection logic
  //     const obstacleBoundingBox = new Box3().setFromObject(obstacle);
  //     if (shipBoundingBox.intersectsBox(obstacleBoundingBox)) {
  //       console.log("Collision detected with obstacle", index);
  //     }
  //   });
  // });

  useFrame((state, delta) => {
    if (!playerPosition.current) return;

    const playerPositionVec = new THREE.Vector3().copy(
      playerPosition.current.position
    );
    const shipBoundingBox = new THREE.Box3().setFromObject(
      playerPosition.current
    );
    shipBoundingBox.expandByScalar(-0.2); // Adjust the scalar to make the bounding box slightly smaller than the ship

    obstaclesRef.current.forEach((obstacle, index) => {
      if (!obstacle.userData.rotationSpeed) {
        // Initialize rotation speed and direction for each axis when first created or reset
        obstacle.userData.rotationSpeed = {
          x: (Math.random() - 0.05) * 0.01, // Speed between -0.1 and 0.1 radians per frame
          y: (Math.random() - 0.05) * 0.01,
          z: (Math.random() - 0.05) * 0.01,
        };
      }

      if (
        obstacle.position.z <
        playerPosition.current.position.z - recycleDistance
      ) {
        // Recycle the obstacle to a new position
        obstacle.position.set(
          playerPosition.current.position.x + (Math.random() - 0.5) * 1000,
          playerPosition.current.position.y + (Math.random() - 0.5) * 1000,
          playerPosition.current.position.z + (Math.random() * 200 + 500)
        );

        // Random scale
        const baseScale =
          Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
        obstacle.scale.set(
          baseScale,
          baseScale * (Math.random() * scaleRange.variability + 0.95),
          baseScale * (Math.random() * scaleRange.variability + 0.95)
        );
        obstacle.visible = true;
      }

      // Continuous rotation based on the stored rotation speeds
      obstacle.rotation.x += obstacle.userData.rotationSpeed.x;
      obstacle.rotation.y += obstacle.userData.rotationSpeed.y;
      obstacle.rotation.z += obstacle.userData.rotationSpeed.z;

      // Collision detection
      const obstacleBoundingBox = new THREE.Box3().setFromObject(obstacle);
      if (shipBoundingBox.intersectsBox(obstacleBoundingBox)) {
        console.log(`Collision ${index}`);
        // updateGame();
        collisionFn();
      }
    });
  });

  return null;
}

export default React.memo(ProceduralObstacle);
