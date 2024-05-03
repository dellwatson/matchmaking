import * as THREE from "three";
import * as Curves from "three/examples/jsm/curves/CurveExtras";
import { addEffect } from "@react-three/fiber";
import { create } from "zustand";
import * as audio from "./audio";
import { createRef } from "react";
import abilityStore from "./hud/AbilitySlot/ability-store";
import globalStore from "@/store/global-store";

let guid = 1;

const useStore = create((set, get) => {
  let spline = new Curves.GrannyKnot();
  let track = new THREE.TubeGeometry(spline, 250, 0.2, 10, true);
  let cancelLaserTO = undefined;
  let cancelExplosionTO = undefined;
  const box = new THREE.Box3();

  return {
    set,
    get,
    contdownStarting: false,
    ship: createRef(),
    shipBox: new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()),
    // shipBox: new THREE.Box3(),
    exhaust: createRef(),
    camera: createRef(),
    // camera: undefined,
    explode: false,
    game_over: null,
    speed: 200,
    increaseSpeed: (v) => {
      set({
        speed: v,
      });
    },
    updateGame: () => {
      console.log("updating game state");
      // update game-over + modal + gamestate
      // need to get active from abilityStore

      const active = abilityStore.getState().active;
      console.log(active, "active?");
      if (!active) {
        set({
          explode: true,
          speed: 0,
        });

        // Delay setting the game_over state by 1 second
        setTimeout(() => {
          set({
            game_over: true,
            explode: false,
            // ship: null,
          });
        }, 1000); // 1000 milliseconds = 1 second
      }
      //
    },
    setGameOver: (v) => {
      set({
        game_over: true,
        speed: 0,
      });
    },
    crashes: 0,
    addCrash: () => {
      if (get().game_over) return;
      set((state) => {
        return { crashes: state?.crashes + 1 };
      });
    },
    collect: 0,
    addCollect: () => {
      if (get().game_over) return;

      set((state) => {
        return { collect: state?.collect + 1 };
      });
    },
    startTime: 0,
    setStartTime: (v) => {
      if (get().game_over) return;

      console.log("START TIME CREATED");
      set((state) => {
        return { startTime: v };
      });
    },
    endTime: 0,
    setEndTime: (v) => {
      set((state) => {
        return { endTime: v };
      });
    },

    //
    // controls: {
    //   left: false,
    //   right: false,
    //   up: false,
    //   down: false,
    // },
    // mode_control: "keyboard",

    sound: false,
    points: 0,
    health: 100,
    lasers: [],
    explosions: [],
    rocks: randomData(80, track, 10, 8, () => 1 + Math.random() * 2.5),
    enemies: randomData(1, track, 20, 15, 1),
    mutation: {
      t: 0,
      position: new THREE.Vector3(),
      startTime: Date.now(),

      track,
      scale: 15,
      fov: 70,
      hits: false,
      rings: randomRings(30, track),
      particles: randomData(7, track, 100, 1, () => 0.5 + Math.random() * 0.8),
      looptime: 40 * 1000,
      binormal: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      clock: new THREE.Clock(false),
      mouse: new THREE.Vector2(-250, 50),

      // Re-usable objects
      dummy: new THREE.Object3D(),
      ray: new THREE.Ray(),
      box: new THREE.Box3(),
    },

    actions: {
      init() {
        const { mutation, actions } = get();
        // set({ camera });
        mutation.clock.start();
        // actions.toggleSound(get().sound);

        // addEffect(() => {
        //   const { rocks, enemies } = get();

        //   const time = Date.now();
        //   const t = (mutation.t =
        //     ((time - mutation.startTime) % mutation.looptime) /
        //     mutation.looptime);
        //   mutation.position = track.parameters.path.getPointAt(t);
        //   mutation.position.multiplyScalar(mutation.scale);

        //   // test for wormhole/warp
        //   let warping = false;
        //   if (t > 0.3 && t < 0.4) {
        //     if (!warping) {
        //       warping = true;
        //       playAudio(audio.warp);
        //     }
        //   } else if (t > 0.5) warping = false;

        //   // test for hits
        //   const r = rocks.filter(actions.test);
        //   const e = enemies.filter(actions.test);
        //   const a = r.concat(e);
        //   const previous = mutation.hits;
        //   mutation.hits = a.length;
        //   if (previous === 0 && mutation.hits) playAudio(audio.click);
        //   const lasers = get().lasers;
        //   if (
        //     mutation.hits &&
        //     lasers.length &&
        //     time - lasers[lasers.length - 1] < 100
        //   ) {
        //     const updates = a.map((data) => ({ time: Date.now(), ...data }));
        //     set((state) => ({ explosions: [...state.explosions, ...updates] }));
        //     clearTimeout(cancelExplosionTO);
        //     cancelExplosionTO = setTimeout(
        //       () =>
        //         set((state) => ({
        //           explosions: state.explosions.filter(
        //             ({ time }) => Date.now() - time <= 1000
        //           ),
        //         })),
        //       1000
        //     );
        //     set((state) => ({
        //       points: state.points + r.length * 100 + e.length * 200,
        //       rocks: state.rocks.filter(
        //         (rock) => !r.find((r) => r.guid === rock.guid)
        //       ),
        //       enemies: state.enemies.filter(
        //         (enemy) => !e.find((e) => e.guid === enemy.guid)
        //       ),
        //     }));
        //   }
        //   //if (a.some(data => data.distance < 15)) set(state => ({ health: state.health - 1 }))
        // });
      },
    },
  };
});

function randomData(count, track, radius, size, scale) {
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
    const speed = 0.1 + Math.random();
    return {
      guid: guid++,
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

function randomRings(count, track) {
  let temp = [];
  let t = 0.4;
  const startingX = -10;
  for (let i = 0; i < count; i++) {
    t += 0.003;

    //
    // const pos = track.parameters.path.getPointAt(t);
    const pos = new THREE.Vector3(...[0 + i, 0, startingX - i]);
    pos.multiplyScalar(15);

    //
    // const segments = track.tangents.length;
    const segments = 20; // it doesnt matter?

    const pickt = t * segments;

    const pick = Math.floor(pickt);

    const lookAt = track.parameters.path
      .getPointAt((t + 1 / track.parameters.path.getLength()) % 1)
      .multiplyScalar(15);

    //
    const matrix = new THREE.Matrix4().lookAt(
      pos,
      lookAt,
      track.binormals[pick]
    );

    temp.push([pos.toArray(), matrix]);
  }
  return temp;
}

function playAudio(audio, volume = 1, loop = false) {
  // globalStore
  if (globalStore.getState().sound) {
    audio.currentTime = 0;
    audio.volume = volume;
    audio.loop = loop;
    audio.play();
  } else audio.pause();
}

export default useStore;

const mutation = {
  gameOver: false,
  score: 0,
  gameSpeed: 0.0,
  desiredSpeed: 0.0,
  horizontalVelocity: 0,
  verticalVelocity: 0,
  colorLevel: 0,
  shouldShiftItems: false,
  currentMusicLevel: 0,
  currentLevelLength: 0,
  globalColor: new THREE.Color(),
};

export { audio, playAudio, mutation };

function randomRingsx(count, track, startingPositions) {
  console.log("random rings", track);
  let temp = [];
  let t = 0.4;
  for (let i = 0; i < count; i++) {
    t += 0.003;
    // Check if startingPositions array is provided and has enough positions
    const pos =
      startingPositions && startingPositions[i]
        ? new THREE.Vector3(...startingPositions[i])
        : track.parameters.path.getPointAt(t).multiplyScalar(15);

    const segments = track.tangents.length;

    const pickt = t * segments;

    const pick = Math.floor(pickt);

    const lookAt = track.parameters.path
      .getPointAt((t + 1 / track.parameters.path.getLength()) % 1)
      .multiplyScalar(15);

    const matrix = new THREE.Matrix4().lookAt(
      pos,
      lookAt,
      track.binormals[pick]
    );

    temp.push([pos.toArray(), matrix]);
  }
  return temp;
}
