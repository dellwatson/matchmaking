import { create } from "zustand";
import * as THREE from "three";
import * as Curves from "three/examples/jsm/curves/CurveExtras";
let guid = 1;

const numRocksPerGroup = 50;
export const INTERVAL = 500;
const obstacleStore = create((set, get) => {
  let spline = new Curves.GrannyKnot();
  let track = new THREE.TubeGeometry(spline, 250, 0.2, 10, true);

  // Define A, B, and C here
  const A = INTERVAL;
  const B = INTERVAL * 2;
  const C = INTERVAL * 3;

  const groupRandom = (_val) =>
    randomData(
      numRocksPerGroup,
      track,
      150,
      8,
      () => 1 + Math.random() * 2.5,
      _val
    );

  return {
    set,
    get,
    // type : box / rocks
    A,
    B,
    C,
    groupValue: [
      { title: "A", value: A },
      { title: "B", value: B },
      { title: "C", value: C },
    ],
    group_rocksA: groupRandom(A),
    group_rocksB: groupRandom(B),
    group_rocksC: groupRandom(C),

    regenerateRandom: (title: string = "A", val) => {
      //current position
      //update x|y|z
      // 200
      const _intervalUpdate = INTERVAL * 3 + val;
      function updateValueByTitle(groupValue, titleToUpdate, newValue) {
        return groupValue.map((item) => {
          if (item.title === titleToUpdate) {
            return { title: titleToUpdate, value: newValue };
          }
          return item;
        });
      }

      if (title === "C") {
        // update C
        set((state) => ({
          group_rocksC: groupRandom(_intervalUpdate),
          C: _intervalUpdate,
          groupValue: updateValueByTitle(
            state?.groupValue,
            "C",
            _intervalUpdate
          ),
        }));
      } else if (title === "A") {
        // update A
        set((state) => ({
          group_rocksA: groupRandom(_intervalUpdate),
          A: _intervalUpdate,
          groupValue: updateValueByTitle(
            state?.groupValue,
            "A",
            _intervalUpdate
          ),
        }));
      } else if (title === "B") {
        // update B
        set((state) => ({
          group_rocksB: groupRandom(_intervalUpdate),
          B: _intervalUpdate,
          groupValue: updateValueByTitle(
            state?.groupValue,
            "B",
            _intervalUpdate
          ),
        }));
      }
    },
  };
});

export default obstacleStore;

// randomData(100, track, 150, 8, () => 1 + Math.random() * 2.5),
// starting point
function randomData(count, track, radius, size, scale, starting = 0) {
  return new Array(count).fill().map(() => {
    const t = Math.random();
    const pos = track.parameters.path.getPointAt(t);
    pos.multiplyScalar(15);

    const offset = pos
      .clone()
      .add(
        new THREE.Vector3(
          -radius + Math.random() * radius * 2,
          -radius + Math.random() * radius * 2,
          -radius + Math.random() * radius * 2
        )
      );

    // cannot be in 0
    offset.z += starting;
    const speed = 0.1 + Math.random();

    return {
      guid: starting++,
      scale: typeof scale === "function" ? scale() : scale,
      size,
      offset,
      pos,
      speed,
      radius,
      t,
      hit: new THREE.Vector3(),
      distance: 1000,
    };
  });
}
