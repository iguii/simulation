import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button/Button";
import Description from "../components/Description/Description";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";

import { randomNumberGenerator } from "../utils/ProductosMedios";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";

let messagesMatrix = [];
const gallinaCalculus = (totalSimulations, days, chickenPrice, eggPrice) => {
  let matrix = [];
  messagesMatrix = [];
  let ingresoBruto = 0;
  let promedioDia = 0;
  let cantidadPollosMuertos = 0;
  let cantidadHuevosRotos = 0;

  for (let i = 0; i < totalSimulations; i++) {
    let simulationMatrix = [];
    let messageRow = [];

    let eggSum = 0;
    let aliveChickenSum = 0;
    let totalDeathEgg = 0;
    let totalBrokenEgg = 0;
    let ib = 0;
    for (let j = 0; j < days; j++) {
      let row = [];
      row.push(j + 1);
      let rEggNumber = randomNumberGenerator();
      row.push(rEggNumber);

      let eggNumber;
      if (rEggNumber <= 0.135) {
        eggNumber = 0;
      } else if (rEggNumber <= 0.406) {
        eggNumber = 1;
      } else if (rEggNumber <= 0.672) {
        eggNumber = 2;
      } else if (rEggNumber <= 0.857) {
        eggNumber = 3;
      } else if (rEggNumber <= 0.947) {
        eggNumber = 4;
      } else if (rEggNumber <= 0.983) {
        eggNumber = 5;
      } else if (rEggNumber <= 0.995) {
        eggNumber = 6;
      } else if (rEggNumber <= 0.998) {
        eggNumber = 7;
      } else {
        eggNumber = 8;
      }
      row.push(eggNumber);

      let rEggState = randomNumberGenerator();

      let brokenEgg = 0;
      let deathEgg = 0;
      let aliveEgg = 0;
      let totalEgg = 0;

      for (let h = 0; h < eggNumber; h++) {
        if (rEggState <= 0.2) {
          //HUEVO ROTO
          brokenEgg += 1;
        } else if (rEggState <= 0.5) {
          let rChickenState = randomNumberGenerator();
          if (rChickenState <= 0.2) {
            // POllos muertos +1
            deathEgg += 1;
          } else {
            //Pollos vivos +1
            aliveEgg += 1;
          }
        } else {
          //Se quedan como huevos
          totalEgg += 1;
        }
      }
      row.push(brokenEgg);
      row.push(aliveEgg);
      row.push(deathEgg);
      row.push(totalEgg);

      eggSum += totalEgg;
      aliveChickenSum += aliveEgg;
      simulationMatrix.push(row);

      totalDeathEgg += deathEgg;
      totalBrokenEgg += brokenEgg;
    }

    ib = parseInt(eggSum * eggPrice) + parseInt(aliveChickenSum * chickenPrice);

    messageRow.push("El ingreso bruto es igual a " + parseInt(ib) + " Bs");
    messageRow.push(
      "El ingreso promedio es igual a " +
        (parseInt(ib) / parseInt(days)).toFixed(3) +
        " Bs/dia"
    );
    messageRow.push(
      "La cantidad de pollos que muere es igual a " + totalDeathEgg
    );
    messageRow.push("La cantidad de huevos rotos es igual a " + totalBrokenEgg);

    messagesMatrix.push(messageRow);

    ingresoBruto += ib;
    promedioDia += parseInt(ib) / parseInt(days);
    cantidadPollosMuertos += totalDeathEgg;
    cantidadHuevosRotos += totalBrokenEgg;

    matrix.push(simulationMatrix);
    console.log("Simulacion");
  }
  alert(
    "El ingreso bruto es igual a " +
      (ingresoBruto / totalSimulations).toFixed(2) +
      " Bs"
  );
  alert(
    "El ingreso promedio es igual a " +
      (promedioDia / totalSimulations).toFixed(2) +
      " Bs/dia"
  );
  alert(
    "La cantidad de pollos que muere es igual a " +
      (cantidadPollosMuertos / totalSimulations).toFixed(2)
  );
  alert(
    "La cantidad de huevos rotos es igual a " +
      (cantidadHuevosRotos / totalSimulations).toFixed(2)
  );

  console.log(matrix);

  return matrix;
};

const Gallina = ({ title }) => {
  const navigate = useNavigate();
  const [totalSimulations, setTotalSimulations] = useState(0);
  const [days, setDays] = useState(0);
  const [chickenPrice, setChickenPrice] = useState(0);
  const [eggPrice, setEggPrice] = useState(0);

  const [headers, setHeaders] = useState([]);
  const titles = [
    "Dia",
    "r Cantidad de nuevos",
    "Cantidad de huevos",
    "Huevos rotos",
    "Pollos vivos",
    "Pollos muertos",
    "Huevos",
  ];

  const [body, setBody] = useState([]);

  const [information, setInformation] = useState([]);

  return (
    <div>
      <Header title={title} />
      <div className="container">
        <Description
          text="Un granjero tiene una gallina que pone huevos a razon Poisson con media de
          2huevos/dia. El 20% de los huevos se rompen, del 30% de ellos nacen pollos y el
          resto permanecen como huevos. De los pollos el 20% muere y el 80% sobreviven. Simule
          este sistema durante 300 dias y determine el ingerso promedio del granjero si cada huevo
          lo venden en $2 y cada pollo en $30. Tambien determine cantidad."
        />
        <div className="__input--grid">
          <Input
            message="Cantidad de simulaciones"
            onChange={(event) => setTotalSimulations(event.target.value)}
          />
          <Input
            message="Cantidad de dias"
            onChange={(event) => setDays(event.target.value)}
          />
          <Input
            message="Precio de venta de pollos"
            onChange={(event) => setChickenPrice(event.target.value)}
          />
          <Input
            message="Precio de venta de huevos"
            onChange={(event) => setEggPrice(event.target.value)}
          />
          <Button
            text="Calcular"
            onClick={() => {
              setHeaders(titles);
              setBody(
                gallinaCalculus(totalSimulations, days, chickenPrice, eggPrice)
              );
              setInformation(messagesMatrix);
            }}
          />
          <Button text="Volver al menu" onClick={() => navigate("/")} />
        </div>

        <Table headers={headers} bodyTable={body} information={information} />
      </div>
      <Footer />
    </div>
  );
};

Gallina.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Gallina;
