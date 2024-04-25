import LobbyTop from "./interfaces/LobbyTop";
import Garage from "./garage";
import Play from "../play";
import Pass from "./interfaces/pass";
import NewsSection from "./interfaces/news";
import SeasonPass from "@theras_labs/ui/src/Lobby/SeasonPassBtn";

export default function Layout() {
  return (
    <>
      <div className="absolute  w-full fixed z-10 ">
        <LobbyTop />
        {/* <LobbyLeft /> */}
        {/* <LobbyRight /> */}
      </div>
    </>
  );
}

export function LobbyInterfaceBot() {
  // mobile interfaces too
  return (
    <div className="absolute z-10 w-full border  ">
      {/* <Garage /> */}
      {/* <div className="lg:block hidden ">
        <Pass />
      </div> */}
      <div className="lg:block hidden absolute bottom-0  p-4   ">
        <SeasonPass />
      </div>
      {/* GameMode */}
      <div className="lg:block hidden ">
        <Play isMobile={false} />
      </div>
      <div className="lg:hidden ">
        <Play isMobile />
      </div>
    </div>
  );
}

// corner?
// accordion?
//
const Box = ({
  // bg
  // border
  variant = "transparent",
  children,
  className = "",
  classNameInside = "",
}) => {
  // transparent
  return (
    <div
      className={` 
      border-1
    border-green-300
    //border-[#FDFFFF]
    rounded-sm
    backdrop-blur-sm
    overflow-hidden
    ${className}
    `}>
      <div
        className={` 
        w-full h-full
        absolute
        border
        bg-gradient-to-r from-[#84D4BC] to-[#333333]
         opacity-25
         `}
      />
      <div
        className={` 
      ${classNameInside}
      `}>
        {children}
      </div>
    </div>
  );
};
