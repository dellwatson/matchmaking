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
import "@/_ui/styles/global.scss";
import Product from "./pages/Product";

function App() {
  const { isFullScreen } = globalStore();
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

  return (
    // <FullScreen enabled={isFullScreen}>
    <BrowserRouter>
      {/* Auth Provider */}
      {/* <div className="p-2 bg-red-800 font-bold uppercase flex justify-between fixed z-999 w-full">
        Announcement: Caldera testnet currently in problem, please try the other
        available network
      </div> */}
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="match-room/*" element={<MatchRoom />} />
        <Route path="product/*" element={<Product />} />
      </Routes>
    </BrowserRouter>
    // </FullScreen>
  );
}

export default App;
