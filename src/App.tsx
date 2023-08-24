import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Lobby from "@/pages/Lobby";

// import MatchRoom from "@src/pages/MatchRoom";

function App() {
  return (
    <BrowserRouter>
      {/* Auth Provider */}
      <Routes>
        <Route path="/" element={<Lobby />} />
        {/* <Route path="room/*" element={<MatchRoom />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
