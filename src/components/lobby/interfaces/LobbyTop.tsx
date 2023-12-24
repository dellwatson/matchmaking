import {
  RiFullscreenFill,
  RiSettings3Line,
  RiNotification2Fill,
} from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import LobbySound from "./settings/sound";
import { useState } from "react";
import SettingsModal from "./settings/settings-modal";
import Auth from "../auth";
import NavHeader from "./NavHeader";
import Drawer from "../drawer";
import globalStore from "@/store/global-store";

const LobbyTop = () => {
  const [showAnnounce, setShow] = useState(true);
  return (
    <>
      {showAnnounce && (
        <div className="p-2 bg-red-800 font-bold uppercase flex justify-between  z-999 w-full">
          <div />
          Caldera testnet currently in problem, please try the other available
          network
          <div onClick={() => setShow(false)} className="mr-2 cursor-pointer">
            X
          </div>
        </div>
      )}
      <div className="absolute w-full flex justify-between p-4">
        <div className="flex cursor-pointer w-full  ">
          <Auth />
        </div>

        <div className="flex w-full  justify-center">
          <NavHeader />
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
          <Drawer />
        </div>
      </div>
    </>
  );
};

export default LobbyTop;

export const FullScreen = () => {
  // onclick fullscreen
  const { setFullScreen, isFullScreen } = globalStore();
  return (
    <div className="p-2">
      <RiFullscreenFill
        onClick={() => setFullScreen(!isFullScreen)}
        size={24}
      />
    </div>
  );
};
// const NavBar = () => {
//   // onclick fullscreen
//   return (
//     <div className="p-2">
//       <RxHamburgerMenu size={24} />
//     </div>
//   );
// };
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
export const Settings = () => {
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
