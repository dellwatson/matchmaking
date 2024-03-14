import CornerBox from "@/_ui/Box/CornerBox";
import React, { useState } from "react";
import { FaScroll } from "react-icons/fa";
import DailyPerformances from "../lobby/interfaces/performances";
import ModalGameMode from "@/_ui/Modal/ModalGameMode";
import { Label, Subtitle, Title } from "@/_ui/Typography";
import { SiSololearn } from "react-icons/si";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdTask } from "react-icons/md";
import CardEvent from "./CardEvent";
// import GlowingText from "@/_ui/text/glowing-text";

export default function GameModeBtn() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CardEvent quests={[1]} onClick={() => setVisible(true)} />
      <ModalGameMode
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      />
    </>
  );
}
