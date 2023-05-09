import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dados from "./pages/Dados";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dados" element={<Dados />} />
      </Routes>
    </Router>
  );
}

export default App;
