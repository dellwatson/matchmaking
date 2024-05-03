import { KeyboardControls } from "@react-three/drei";
import React, { useMemo } from "react";

const Controls = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  boost: "boost",
};

export default function Players() {
  // load players
  // if player is me load starship with Keyboard + joystick control

  const map = useMemo(
    () => [
      { name: Controls.up, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.down, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.boost, keys: ["Space"] },
    ],
    []
  );

  return <KeyboardControls map={map}>{}</KeyboardControls>;
}

// if user solo just use from store ?
function Player() {
  // detect if it's me or other id
  // ability
  // useBoost
  // on player it can activate
}

// this supposed to have visual effect and etc
function PlayerModel() {
  // which is a starship and their related model
}
