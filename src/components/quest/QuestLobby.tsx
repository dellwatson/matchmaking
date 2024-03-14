import CornerBox from "@/_ui/Box/CornerBox";
import React, { useState } from "react";
import { FaScroll } from "react-icons/fa";
import DailyPerformances from "../lobby/interfaces/performances";
import ModalQuest from "@/_ui/Modal/ModalQuest";
import { MdTask } from "react-icons/md";

export default function QuestLobby() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <MobileQuest {...{ visible, setVisible }} />
      <div className="hidden lg:block">
        <CornerBox
          onClick={() => setVisible(true)}
          classNameOutside=" w-[360px] cursor-pointer "
          className="w-full h-full "
          background="rgba(0, 0, 0, 0.9)">
          <DailyPerformances />
          <div
            onClick={() => setVisible(true)}
            className="p-2 capitalize cursor-pointer">
            see more
          </div>
        </CornerBox>
      </div>
    </div>
  );
}

const MobileQuest = ({ visible, setVisible }) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setVisible(true)}
        className="p-2 rounded-sm flex items-center bg-slate-900 font-bold uppercase">
        <div className="animate-pulse relative  right-6 bottom-7 ">
          <MdTask
            size={50}
            className="-rotate-10 absolute left-0 text-orange-400"
          />
        </div>
        &nbsp; &nbsp; &nbsp; Quest &nbsp;
      </button>
      <ModalQuest
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      />
    </div>
  );
};
