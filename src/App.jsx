import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Dados from "./pages/Dados";
import Gallina from "./pages/Gallina";

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
        <Route
          exact
          path="/gallina"
          element={<Gallina title="Gallina ponedora de huevos" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
