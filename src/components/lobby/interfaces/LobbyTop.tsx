import Avatar from "@/components/_ui/profile/avatar";
import { RiFullscreenFill, RiSettings3Line } from "react-icons/ri";
import LobbySound from "./settings/sound";
import { useState } from "react";
import SettingsModal from "./settings/settings-modal";
import CornerBox from "@/components/_ui/box/CornerBox";

const LobbyTop = () => {
  return (
    <div className="absolute w-full flex justify-between p-4">
      <div className="flex">
        {/* profiles */}
        {/* profile, notif, inventory? 0x , tokens */}
        <Avatar />
        <div className="ml-4 flex flex-col justify-center">
          ALL-IN
          <br />
          <div className="text-green-400">ONLINE</div>
        </div>
      </div>

      <div>
        <NavsLobby />
      </div>
      {/* <div>players active</div> */}
      <div className="flex cursor-pointer ">
        {/* settings,
        language,
        lndscape?,
        fullscreen */}

        {/* <Language /> */}
        {/* SOUND */}
        <LobbySound />
        <Settings />
        <FullScreen />
      </div>
    </div>
  );
};

export default LobbyTop;

const NavsLobby = () => {
  return (
    <div className=" flex space-x-4">
      {["Home", "Inventory", "Shop"].map((item, i) => (
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

const ProfileArea = () => {
  // else walletconnect or login
  return (
    <div>
      <div>{/* Avatar */}</div>

      {/* wallet connect  */}
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
const Language = () => {
  // onclick fullscreen
  return <div className="">EN</div>;
};

const Row = () => {
  return <div></div>;
};
