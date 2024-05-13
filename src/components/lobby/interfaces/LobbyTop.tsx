import {
  RiFullscreenFill,
  RiSettings3Line,
  RiNotification2Fill,
} from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import LobbySound from "./settings/sound";
import { useState } from "react";
// import SettingsModal from "./settings/settings-modal";
import NavHeader from "./NavHeader";
import Drawer from "../drawer";
import globalStore from "@/store/global-store";
import { toast, useToast } from "react-toastify";
import ModalSettings from "@theras_labs/ui/src/Modal/ModalSettings";
// import AuthButton from "@theras_labs/ui/src/Auth/AuthButton";
import AuthButton from "@theras_labs/ui/src/Auth/AuthButton";
// import useViewAptos from "@/_core/hooks/contract/useViewAptos";
import { useLocation } from "react-router-dom";
import { Title } from "@theras_labs/ui/src/Typography";

const LobbyTop = () => {
  // useViewAptos({
  //   contractAddress:
  //     "0xcab918f5f28bab478e237cd15c3750b3fa3f95ec0505510a24aa663efb348dd3",
  //   contractName: "main",
  //   functionName: "has_aptogotchi",
  //   args: [
  //     "0xd475a64ba04ac64028c9b2c7ab61d68550a34062a579c89ffd331e7751cbfd4e",
  //   ],
  // });
  return (
    <>
      <div className="absolute w-full flex justify-between p-4 backdrop-blur-sm">
        <div className=" flex cursor-pointer w-full  ">
          {/* on mobile */}
          {/* <AuthButton /> */}
          <AuthButton />
        </div>

        <div className="!hidden !lg:block flex w-full pt-4  justify-center  text-center h-full">
          {/* <NavHeader /> */}
          <TitlePage />
        </div>
        {/* <div>players active</div> */}
        <div className="flex cursor-pointer w-full justify-end pt-2 ">
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
          {/* <FullScreen /> */}
          <Drawer />
        </div>
      </div>
    </>
  );
};

export default LobbyTop;

export const TitlePage = (text = "STAR-EX") => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]; // Extract the first part of the path after the slash

  // If path is empty or '/', return nothing
  if (path === "" || path === "/") {
    return (
      <Title className="uppercase tracking-[10px] !font-thin">{`STAR-EX`}</Title>
    );
    // return null;
  }

  // If the path contains parameters, remove them
  const title = path.split(":")[0];

  return (
    <Title className="uppercase tracking-[10px]  !font-thin">{title}</Title>
  );
};

export const FullScreen = () => {
  // onclick fullscreen
  const { setFullScreen, isFullScreen } = globalStore();

  return (
    <div className="p-2">
      <RiFullscreenFill
        onClick={() => {
          toast("Fullscreen is still on development, modal won't shows up");
          setFullScreen(!isFullScreen);
        }}
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
      <ModalSettings
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      />
      {/* <SettingsModal
        {...{
          isOpen: visible,
          setIsOpen: setVisible,
          closeModal: () => setVisible(false),
        }}
      /> */}
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
