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

function App() {
  const [block, setBlock] = useState(false);
  useEffect(() => {
    const getGPU = async () => {
      const gpuTier = await getGPUTier();
      if (gpuTier?.isMobile) {
        setBlock(gpuTier);
      }
    };
    getGPU();
  }, []);

  if (block) {
    return (
      <div className="uppercase font-bold flex justify-center items-center h-screen">
        Please use desktop, currently mobile still not optimised yet.
      </div>
    );
  }

  return (
    <BrowserRouter>
      {/* Auth Provider */}
      <Routes>
        <Route path="/" element={<LobbyPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="match-room/*" element={<MatchRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
