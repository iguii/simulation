import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Description from "../components/Description/Description";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

import { randomNumberGenerator } from "../utils/ProductosMedios";
import Table from "../components/Table/Table";

let messagesMatrix = [];
let sugarCalculus = (
  totalSimulations,
  totalDays,
  orderCost,
  inventory,
  acquisition,
  sellPrice,
  store
) => {
  let matrix = [];
  let costoTotalDias = 0;
  let gananciaNetaDias = 0;
  let demandaInsatisfechaDias = 0;
  //CAMBUO

  messagesMatrix = [];
  for (let i = 0; i < totalSimulations; i++) {
    let messagesRow = [];
    let row = [];
    let rowMatrix = [];
    let totalCost = 0;
    let gananciaNeta = 0;
    let invAzu = store;
    let costoTotalAdq = 0;
    let costoTotalReorden = 0;
    let costoTotalMantenimiento = 0;
    let tent = 0;
    let pAzu = 0;
    let dAzu = 0;
    let ingresoBruto = 0;
    let demandaInsatisfecha = 0;

    for (let j = 0; j < totalDays; j++) {
      row = [];
      row.push(j + 1);
      if ((j + 1) % 7 === 0) {
        pAzu = store - invAzu;
        costoTotalAdq += pAzu * acquisition;
        costoTotalReorden += parseInt(orderCost);
        let rTent = randomNumberGenerator();
        tent = Math.round(1 + 2 * rTent);
        if (invAzu > 0) {
          costoTotalMantenimiento += sellPrice * invAzu;
        }
      } else {
        if (tent !== 0) {
          tent--;
          if (tent === 0) {
            invAzu += pAzu;
          }
        }

        let rAzu = randomNumberGenerator();
        rAzu = rAzu === 1 ? 0.999999 : rAzu;
        dAzu = Math.round(-100 * Math.log(1 - rAzu));

        if (invAzu >= dAzu) {
          invAzu -= dAzu;
          costoTotalMantenimiento += invAzu * inventory;
          ingresoBruto += dAzu * sellPrice;
        } else {
          demandaInsatisfecha += dAzu - invAzu;
          ingresoBruto += invAzu * sellPrice;
          invAzu = 0;
        }
      }

      row.push(dAzu);
      row.push(invAzu);
      row.push(costoTotalMantenimiento);
      row.push(ingresoBruto);

      rowMatrix.push(row);
    }
    matrix.push(rowMatrix);
    totalCost = costoTotalMantenimiento + costoTotalAdq + costoTotalReorden;
    gananciaNeta = ingresoBruto - totalCost;

    messagesRow.push("Costo Total " + Number(totalCost).toFixed(3));
    messagesRow.push("Ganancia neta " + Number(gananciaNeta).toFixed(3));
    messagesRow.push("Demanda Insatisfecha " + demandaInsatisfecha);

    costoTotalDias += totalCost;
    gananciaNetaDias += gananciaNeta;
    demandaInsatisfechaDias += demandaInsatisfecha;

    messagesMatrix.push(messagesRow);
  }

  console.log(costoTotalDias);

  alert(
    "Costo Total promedio " +
      Number(costoTotalDias / totalSimulations).toFixed(3)
  );
  alert(
    "Ganancia neta " + Number(gananciaNetaDias / totalSimulations).toFixed(3)
  );
  alert(
    "Demanda Insatisfecha " +
      (demandaInsatisfechaDias / totalSimulations).toFixed(3)
  );

  return matrix;
};

const AgenciaDeAzucar = ({ title }) => {
  const navigate = useNavigate();
  const [totalSimulations, setTotalSimulations] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [orderCost, setOrderCost] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [acquisition, setAcquisition] = useState(0);
  const [store, setStore] = useState(0);

  const [headers, setHeaders] = useState([]);

  const [body, setBody] = useState([]);

  const [information, setInformation] = useState([]);
  const titles = [
    "Día",
    "Demanda Azúcar",
    "Inventario Azúcar",
    "Costo Total Mantenimiento",
    "Ingreso Bruto",
  ];
  return (
    <div>
      <Header title={title} />
      <div className="container">
        <Description text="PENE DE SEXO MONO" />
        <div className="__input--grid">
          <Input
            message="Cantidad de simulaciones"
            onChange={(event) => setTotalSimulations(event.target.value)}
          />
          <Input
            message="Cantidad de Dias"
            onChange={(event) => setTotalDays(event.target.value)}
          />
          <Input
            message="Costo de ordenar"
            onChange={(event) => setOrderCost(event.target.value)}
          />
          <Input
            message="Costo de llevar el inventario"
            onChange={(event) => setInventory(event.target.value)}
          />
          <Input
            message="Costo de adquisicion"
            onChange={(event) => setAcquisition(event.target.value)}
          />
          <Input
            message="Capacidad Bodega"
            onChange={(event) => setStore(event.target.value)}
          />
          <Input
            message="Precio de venta"
            onChange={(event) => setSellPrice(event.target.value)}
          />
          <br />
          <Button
            text="Calcular"
            onClick={() => {
              setHeaders(titles);
              setBody(
                sugarCalculus(
                  totalSimulations,
                  totalDays,
                  orderCost,
                  inventory,
                  acquisition,
                  sellPrice,
                  store
                )
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

AgenciaDeAzucar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AgenciaDeAzucar;
