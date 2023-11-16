import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Lobby from "@/pages/Lobby";

import MatchRoom from "@/pages/MatchRoom";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      {/* Auth Provider */}
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="match-room/*" element={<MatchRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
