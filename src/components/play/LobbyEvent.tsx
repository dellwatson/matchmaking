import CornerBox from "@theras_labs/ui/src/Box/CornerBox";
import React, { useState } from "react";
import { FaScroll } from "react-icons/fa";
import DailyPerformances from "../lobby/interfaces/performances";
import ModalGameMode from "@theras_labs/ui/src/Modal/ModalGameMode";
import { Label, Subtitle, Title } from "@theras_labs/ui/src/Typography";
import { SiSololearn } from "react-icons/si";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdTask } from "react-icons/md";
import CardEvent from "./CardEvent";
// import GlowingText from "@theras_labs/ui/text/glowing-text";

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
