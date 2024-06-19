import { BrowserRouter, Routes, Route } from "react-router-dom";

import MatchRoom from "@/pages/MatchRoom";
import LobbyPage from "@/pages/Lobby";
import { useEffect, useState } from "react";
import globalStore from "./store/global-store";

import {
  isHost,
  myPlayer,
  startMatchmaking,
  useMultiplayerState,
  usePlayersList,
  insertCoin,
  getRoomCode,
} from "playroomkit";
import SampleMatch from "./pages/SampleMatch";
import SampleMatch2 from "./pages/SampleMatch2";

function App() {
  const { isFullScreen, sound, setSoundActive } = globalStore();

  // useActivateFirstSound
  // zustand
  useEffect(() => {
    const activateSound = (event) => {
      if (!sound) {
        setSoundActive(true);
      }
    };
    document.addEventListener("click", activateSound);
    document.addEventListener("keydown", activateSound);
    return () => {
      document.removeEventListener("click", activateSound);
      document.removeEventListener("keydown", activateSound);
    };
  }, []);

  return (
    // <FullScreen enabled={isFullScreen}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="match-room/*" element={<MatchRoom />} />
        <Route path="match-room-sample/*" element={<SampleMatch />} />
        <Route path="match-room-sample2/*" element={<SampleMatch2 />} />
      </Routes>
    </BrowserRouter>
    // </FullScreen>
  );
}

export default App;
