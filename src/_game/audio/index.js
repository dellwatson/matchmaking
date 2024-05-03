import zapAudio from "./laser.mp3";
import engineAudio from "./engine.mp3";
import engine2Audio from "./engine2.mp3";
import bgAudio from "./bg.mp3";
import warpAudio from "./warp.mp3";
import clickAudio from "./click.mp3";
import explosionAudio from "./explosion.mp3";
import boost_chargingAudio from "./sound_charging.mp3";
import countdownAudio from "./countdown_arcade.mp3";
import beepWarningAudio from "./beep_warning.mp3";

const mp3 = { explosion: explosionAudio };

const zap = new Audio(zapAudio);
const engine = new Audio(engineAudio);
const engine2 = new Audio(engine2Audio);
const bg = new Audio(bgAudio);
const warp = new Audio(warpAudio);
const click = new Audio(clickAudio);
const explosion = new Audio(explosionAudio);
const boost_charging = new Audio(boost_chargingAudio);
const countdown = new Audio(countdownAudio);
const beepWarning = new Audio(beepWarningAudio);

export {
  zap,
  engine,
  engine2,
  bg,
  warp,
  click,
  explosion,
  mp3,
  boost_charging,
  countdown,
  beepWarning,
};
