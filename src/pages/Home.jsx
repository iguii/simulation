import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const changeScreen = (choice) => {
    let navigationRoute = "/";
    switch (choice) {
      case 1:
        navigationRoute = "/plazo-fijo";
        break;
      case 2:
        navigationRoute = "/poblaciones";
        break;
      case 3:
        navigationRoute = "/clientes-de-una-tienda";
        break;
      case 4:
        navigationRoute = "/dados";
        break;
      case 5:
        navigationRoute = "/gallina";
        break;
      case 6:
        navigationRoute = "/agencia-de-azucar";
        break;
    }
    navigate(navigationRoute);
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      <button onClick={() => changeScreen(1)}>
        Plazo fijo FALTA IMPLEMENTAR
      </button>
      <br />
      <button onClick={() => changeScreen(2)}>
        Poblacion FALTA IMPLEMENTAR
      </button>
      <br />
      <button onClick={() => changeScreen(3)}>
        Clientes FALTA IMPLEMENTAR
      </button>
      <br />
      <button onClick={() => changeScreen(4)}>Dados</button>
      <br />
      <button onClick={() => changeScreen(5)}>Gallina FALTA IMPLEMENTAR</button>
      <br />
      <button onClick={() => changeScreen(6)}>
        Agencia de Azucar FALTA IMPLEMENTAR
      </button>
    </div>
  );
};

export default Home;
