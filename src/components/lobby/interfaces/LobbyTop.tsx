import {
  RiFullscreenFill,
  RiSettings3Line,
  RiNotification2Fill,
} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
import LobbySound from "./settings/sound";
import { useState } from "react";
import SettingsModal from "./settings/settings-modal";
import CornerBox from "@/components/_ui/box/CornerBox";
import Auth from "../auth";

const LobbyTop = () => {
  return (
    <div className="absolute w-full flex justify-between p-4">
      <div className="flex cursor-pointer w-full ">
        <Auth />
      </div>

      <div className="flex w-full ">
        <NavsLobby />
      </div>
      {/* <div>players active</div> */}
      <div className="flex cursor-pointer w-full justify-end">
        {/* settings,
        language,
        lndscape?,
        fullscreen */}

        {/* <Language /> */}
        {/* SOUND */}
        <LobbySound />
        <Notif />
        {/* <Language /> */}
        <Settings />
        <FullScreen />
        <NavBar />
      </div>
    </div>
  );
};

export default LobbyTop;

const NavsLobby = () => {
  return (
    <div className=" flex space-x-4 ">
      {["Home", "Shop", "Inventory"].map((item, i) => (
        <CornerBox
          corner={false}
          border
          background="rgba(132,212,188,0.2)"
          className="p-4 px-6 min-w-[200px] text-center uppercase text-green-400 cursor-pointer"
        >
          {item}
        </CornerBox>
      ))}
    </div>
  );
};

const FullScreen = () => {
  // onclick fullscreen
  return (
    <div className="p-2">
      <RiFullscreenFill size={24} />
    </div>
  );
};
const NavBar = () => {
  // onclick fullscreen
  return (
    <div className="p-2">
      <RxHamburgerMenu size={24} />
    </div>
  );
};
const Notif = () => {
  // onclick fullscreen
  return (
    <div className="p-2">
      <RiNotification2Fill size={24} />
    </div>
  );
};
const Language = () => {
  // onclick fullscreen
  return (
    <div className="p-2">
      <MdLanguage size={24} />
    </div>
  );
};
const Settings = () => {
  // onclick fullscreen
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-2 " onClick={() => setVisible(!visible)}>
      <SettingsModal
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      />
      <RiSettings3Line size={24} />
    </div>
  );
};
// const Language = () => {
//   // onclick fullscreen
//   return <div className="">EN</div>;
// };

const Row = () => {
  return <div></div>;
};
