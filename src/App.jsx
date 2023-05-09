import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Dados from "./pages/Dados";
import Gallina from "./pages/Gallina";
import Azucar from "./pages/AgenciaDeAzucar";

function App() {
  return (
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
      <Route
        exact
        path="/agencia-de-azucar"
        element={<Azucar title="Agencia de Azucar" />}
      />
    </Routes>
  );
}

export default App;
