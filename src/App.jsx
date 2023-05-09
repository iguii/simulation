import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Dados from "./pages/Dados";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/dados"
          element={<Dados title="Lanzamiento de dados" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
