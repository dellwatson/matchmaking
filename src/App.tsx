import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

import MatchRoom from "@/pages/MatchRoom";
import InventoryPage from "./pages/Inventory";
import ShopPage from "./pages/Shop";
import LobbyPage from "@/pages/Lobby";
import { useEffect, useState } from "react";
import { getGPUTier } from "detect-gpu";
import FullScreen from "react-fullscreen-crossbrowser";
import globalStore from "./store/global-store";
import "@theras_labs/ui/src/styles/global.scss";
import Product from "./pages/Product";
import MyProduct from "./pages/MyProduct";
import Template from "./pages/Template";
import useLobbyGame from "./helpers/hooks/useLobbyGame";

import {
  isHost,
  myPlayer,
  startMatchmaking,
  useMultiplayerState,
  usePlayersList,
  insertCoin,
  getRoomCode,
} from "playroomkit";

function App() {
  const { isFullScreen, sound, setSoundActive } = globalStore();
  // const [block, setBlock] = useState(false);

  // DETECT WEBGL TOO

  // useEffect(() => {
  //   const getGPU = async () => {
  //     const gpuTier = await getGPUTier();
  //     if (gpuTier?.isMobile) {
  //       setBlock(gpuTier);
  //     }
  //   };
  //   getGPU();
  // }, []);

  // useEffect(() => {}, []);

  // if (block) {
  //   return (
  //     <div className="uppercase font-bold flex justify-center items-center h-screen">
  //       Please use desktop, currently mobile still not optimised yet.
  //     </div>
  //   );
  // }

  // useActivateFirstSound
  // zustand
  useEffect(() => {
    const activateSound = (event) => {
      // detect from store already record or not
      if (!sound) {
        // enable sound and store it to state
        // console.log("Click detected");
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
      {/* Auth Provider */}
      {/* <div className="p-2 bg-red-800 font-bold uppercase flex justify-between fixed z-999 w-full">
        Announcement: Caldera testnet currently in problem, please try the other
        available network
      </div> */}
      <Routes>
        {/* <Route path="/" element={<MatchRoom />} /> */}
        <Route path="/" element={<LobbyPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="match-room/*" element={<MatchRoom />} />
        <Route path="product/:listingId" element={<Product />} />
        <Route path="own-product/*" element={<MyProduct />} />
        <Route path="template" element={<Template />} />
      </Routes>
    </BrowserRouter>
    // </FullScreen>
  );
}

export default App;
