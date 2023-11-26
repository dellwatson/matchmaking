import React, { useEffect, useState } from "react";
import useStore from "../../../../store";
import { BatchedRenderer, QuarksLoader } from "three.quarks";
import { ATOM } from "./atom";
import { useFrame, useThree } from "@react-three/fiber";
import abilityStore from "../../ability-store";

export default function Buster() {
  const ship = useStore((s) => s?.ship);
  const active = abilityStore((s) => s?.active);

  const [batchRenderer, setBatchRenderer] = useState(new BatchedRenderer());
  const { scene } = useThree();

  useFrame((state, delta) => {
    if (active) {
      batchRenderer.update(delta);
    }
  });

  useEffect(() => {
    if (ship.current) {
      const loader = new QuarksLoader();

      loader.setCrossOrigin("");

      const obj = loader.parse(ATOM);
      obj.traverse((child) => {
        if (child.type === "ParticleEmitter") {
          batchRenderer.addSystem(child.system);
        }
      });
      obj.scale.set(1, 1, 1);
      ship.current.add(obj);
      // ship.current.add(batchRenderer);
      scene.add(batchRenderer);
    }
  }, []);

  return null;
  //   return spell box instead?
}
