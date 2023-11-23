import React, { useEffect, useState } from "react";
import useStore from "../../../../store";
import { BatchedRenderer, QuarksLoader } from "three.quarks";
import { ATOM } from "./atom";
import { useFrame, useThree } from "@react-three/fiber";

export default function Buster() {
  const ship = useStore((s) => s?.ship);

  const [batchRenderer, setBatchRenderer] = useState(new BatchedRenderer());
  const { scene } = useThree();

  useFrame((state, delta) => {
    batchRenderer.update(delta);
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
      obj.scale.set(0.3, 0.3, 0.3);
      ship.current.add(obj);
      // ship.current.add(batchRenderer);
      scene.add(batchRenderer);
    }
  }, []);

  return null;
  //   return spell box instead?
}
