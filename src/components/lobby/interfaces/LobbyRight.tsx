// on mobile have peek
//
import React from "react";
import NewsSection from "./news";
import Discord from "./community/discord";
import Support from "./support";
import Theras from "./community/theras";

export default function LobbyRight() {
  return (
    <div className="absolute right-0 pt-18 z-10  h-full">
      <NewsSection />
      <Discord />
      <br />
      <Theras />
      <br />
      {/* <Support /> */}
      {/* FEEDBACK MODAL */}
    </div>
  );
}
