import LobbyTop from "./interfaces/LobbyTop";
import Garage from "./garage";
import Play from "./play";
import Pass from "./pass";

export default function Layout() {
  // mobile interfaces too
  return (
    <div className="absolute z-10 w-full  ">
      <LobbyTop />
      {/* <LobbyLeft /> */}
      {/* <LobbyRight /> */}
    </div>
  );
}

export function LobbyInterfaceBot() {
  // mobile interfaces too
  return (
    <div className="absolute z-10 w-full ">
      <Garage />
      {/* <Pass /> */}
      <Play />
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
    `}
    >
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
      `}
      >
        {children}
      </div>
    </div>
  );
};
