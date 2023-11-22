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

function App() {
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
