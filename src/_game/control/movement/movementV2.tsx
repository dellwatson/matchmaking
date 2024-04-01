import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import useStore, { mutation } from "./store";
// import controlStore from "./control-store";
import useStore, { mutation } from "../../store";
import controlStore from "../../hud/controller/control-store";

const MAX_FLIP = 2;

export default function Movement() {
  const BOXREF = useStore((s) => s.ship);
  const speed = useStore((s) => s.speed);
  const controls = controlStore((s) => s.controls);
  const controlsRef = useRef(controls);

  useEffect(
    () =>
      controlStore.subscribe(
        (controls) => (controlsRef.current = controls),
        (state) => state.controls
      ),
    []
  );

  useFrame((_, delta) => {
    if (BOXREF.current && controlsRef.current?.controls) {
      const { left, right, up, down } = controlsRef.current?.controls;
      const turnSpeed = 0.3; // Adjust for responsiveness of turning
      const damping = 0.9; // Adjust for resistance/damping effect

      if (right && !left) {
        mutation.horizontalVelocity = Math.max(
          -MAX_FLIP,
          mutation.horizontalVelocity - turnSpeed * delta
        );
      } else if (left && !right) {
        mutation.horizontalVelocity = Math.min(
          MAX_FLIP,
          mutation.horizontalVelocity + turnSpeed * delta
        );
      } else {
        // Apply damping when not actively turning to gradually reduce velocity
        mutation.horizontalVelocity *= damping;
      }

      if (up && !down) {
        mutation.verticalVelocity = Math.min(
          MAX_FLIP,
          mutation.verticalVelocity + turnSpeed * delta
        );
      } else if (down && !up) {
        mutation.verticalVelocity = Math.max(
          -MAX_FLIP,
          mutation.verticalVelocity - turnSpeed * delta
        );
      } else {
        // Apply damping to vertical velocity as well
        mutation.verticalVelocity *= damping;
      }

      // Apply the velocity to the spaceship's position
      BOXREF.current.position.x += mutation.horizontalVelocity * delta * speed;
      BOXREF.current.position.y += mutation.verticalVelocity * delta * speed;

      // // Smooth position update example
      // const targetX =
      //   BOXREF.current.position.x + mutation.horizontalVelocity * delta * speed;
      // const targetY =
      //   BOXREF.current.position.y + mutation.verticalVelocity * delta * speed;

      // const easingFactor = 1;
      // // Smoothly interpolate towards the target position
      // BOXREF.current.position.x +=
      //   (targetX - BOXREF.current.position.x) * delta * easingFactor;
      // BOXREF.current.position.y +=
      //   (targetY - BOXREF.current.position.y) * delta * easingFactor;

      // Update rotations based on current velocities for visual feedback
      BOXREF.current.rotation.z = -mutation.horizontalVelocity * MAX_FLIP; // Roll effect
      BOXREF.current.rotation.x = -mutation.verticalVelocity * MAX_FLIP; // Pitch effect
    }
  });

  return null;
}
