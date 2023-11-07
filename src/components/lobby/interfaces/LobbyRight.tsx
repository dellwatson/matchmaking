// on mobile have peek
//
import React from "react";
import NewsSection from "./news";
import Discord from "./community/discord";

export default function LobbyRight() {
  return (
    <div className="absolute right-0 mt-16 ">
      <NewsSection />
      <Discord />
    </div>
  );
}
