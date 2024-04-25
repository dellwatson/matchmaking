import React, { useRef, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rockGLB from "../asset/obstacles/rock.gltf";
import useStore from "../store";
import { Box3, Vector3, Sphere, MathUtils } from "three";
import * as THREE from "three";

function ProceduralObstacle({
  modelUrl = rockGLB,
  numObstacles = 350,
  innerRadius = 600,
  outerRadius = 1000,
  scaleRange = { min: 200, max: 240, variability: 0.1 },
}) {
  const { scene, camera } = useThree();
  const obstaclesRef = useRef([]);
  const playerPosition = useStore((s) => s?.ship);
  const { updateGame } = useStore();
  const model = useLoader(GLTFLoader, modelUrl);

  useEffect(() => {
    const loadedModel = model.scene;

    for (let i = 0; i < numObstacles; i++) {
      const obstacle = loadedModel.clone(true);
      obstacle.traverse((child) => {
        if (child.isMesh) {
          child.receiveShadow = true;
          child.material.roughness = 1;
          child.material.metalness = 1;
        }
      });
      positionObstacle(obstacle, false);
      scene.add(obstacle);
      obstaclesRef.current.push(obstacle);
    }
  }, [model, scene, numObstacles]);

  const positionObstacle = (obstacle, visibility = true) => {
    // const phi = MathUtils.randFloat(0, Math.PI); // From top (north pole) to bottom (south pole)
    // const excludeZone = Math.PI / 4; // 45 degrees exclusion zone around the front and back
    // let theta = MathUtils.randFloat(-Math.PI, Math.PI);
    // if (
    //   Math.abs(theta) < excludeZone ||
    //   Math.abs(theta) > Math.PI - excludeZone
    // ) {
    //   theta += 2 * excludeZone; // Shift theta to skip the exclusion zone
    //   theta = theta % (2 * Math.PI); // Normalize theta if necessary
    // }

    let theta = MathUtils.randFloatSpread(2 * Math.PI);
    let phi = Math.acos(MathUtils.randFloatSpread(2));
    // Biasing more obstacles to the front (80% front, 20% back)
    if (Math.random() < 0.8) {
      theta = MathUtils.randFloat(-Math.PI / 2, Math.PI / 2); // Front hemisphere
    }

    const radius = MathUtils.randFloat(innerRadius, outerRadius); // Random radius within bounds

    obstacle.position.setFromSphericalCoords(radius, phi, theta);
    obstacle.position.add(camera.position); // Position relative to the camera/player

    const baseScale = MathUtils.randFloat(scaleRange.min, scaleRange.max);
    obstacle.scale.set(baseScale, baseScale, baseScale);
    obstacle.visible = visibility;
  };

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
      // Check if rotation speed data exists; if not, initialize it
      if (!obstacle.userData.rotationSpeed) {
        // Assign a random rotation speed and direction for each axis when first created or reset
        obstacle.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.1, // Speed between -0.1 and 0.1 radians per frame
          y: (Math.random() - 0.5) * 0.1,
          z: (Math.random() - 0.5) * 0.1,
        };
      }

      // Check if the obstacle is beyond the outerRadius and needs to be repositioned
      const distance = obstacle.position.distanceTo(playerPositionVec);
      if (distance > outerRadius) {
        positionObstacle(obstacle, true);

        // Reset scale when repositioned
        const baseScale =
          Math.random() * (scaleRange.max - scaleRange.min) + scaleRange.min;
        obstacle.scale.set(
          baseScale,
          baseScale * (Math.random() * scaleRange.variability + 0.95),
          baseScale * (Math.random() * scaleRange.variability + 0.95)
        );
      }

      // Apply continuous rotation based on the individual speeds
      obstacle.rotation.x += obstacle.userData.rotationSpeed.x * delta;
      obstacle.rotation.y += obstacle.userData.rotationSpeed.y * delta;
      obstacle.rotation.z += obstacle.userData.rotationSpeed.z * delta;

      // Collision detection
      const obstacleBoundingBox = new THREE.Box3().setFromObject(obstacle);
      //   if (shipBoundingBox.intersectsBox(obstacleBoundingBox)) {
      //     console.log(`Collision detected with obstacle ${index}`);
      //     updateGame();
      //   }

      //   obstacle.visible = true; // Ensure obstacle is visible
    });
  });

  //   useFrame(() => {
  //     if (!playerPosition.current) return;
  //     obstaclesRef.current.forEach((obstacle, index) => {
  //       const distance = obstacle.position.distanceTo(
  //         playerPosition?.current.position
  //       );
  //       if (distance > outerRadius) {
  //         positionObstacle(obstacle); // Reposition if outside the outer sphere
  //       }
  //     });
  //   });

  //   useFrame(() => {
  //     if (!playerPosition.current) return;
  //     const playerZ = playerPosition.current.position.z;
  //     const movementThreshold = 50; // Distance player needs to move before updating obstacles
  //     // Check if player has crossed the threshold since last update
  //     if (Math.abs(playerZ - lastPlayerZ) > movementThreshold) {
  //       lastPlayerZ = playerZ; // Update the last position
  //       obstaclesRef.current.forEach(obstacle => {
  //         const distance = obstacle.position.distanceTo(camera.position);
  //         if (distance > outerRadius || distance < innerRadius) {
  //           positionObstacle(obstacle); // Reposition to maintain within the habitable zone
  //         }
  //       });
  //     }
  //   });
  // let lastPlayerZ = playerPosition.current.position.z;

  return null;
}

export default React.memo(ProceduralObstacle);

// useFrame(() => {
//     if (!playerPosition.current) return;

//     const playerZ = playerPosition.current.position.z;
//     const movementThreshold = 50; // Distance player needs to move before updating obstacles

//     // Check if player has crossed the threshold since last update
//     if (Math.abs(playerZ - lastPlayerZ) > movementThreshold) {
//       lastPlayerZ = playerZ; // Update the last position
//       obstaclesRef.current.forEach(obstacle => {
//         const distance = obstacle.position.distanceTo(camera.position);
//         if (distance > outerRadius || distance < innerRadius) {
//           positionObstacle(obstacle); // Reposition to maintain within the habitable zone
//         }
//       });
//     }
//   });

//   let lastPlayerZ = playerPosition.current.position.z; // Initialize with the player's starting Z position
