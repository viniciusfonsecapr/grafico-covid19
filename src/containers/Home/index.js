import React, { useEffect, useState } from "react";
import api from '../../services/api'

// IMPORTAÇÕES CHART.JS

import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



// ABAIXO FUNCÕES SALVAS EM ARQUIVOS SEPARADOS
import { numberFormatter } from "../../functions/numberFormatter";

// ABAIXO ITENS DO MATERIAL UI USADOS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTADOS ABAIXO 

import AppBar from '../../components/AppBar'

// ABAIXO IMAGENS USADAS NO PROJETO
// import DistanciaSegura from '../../assets/distancia-segura.svg'
import CovidLogo from '../../assets/covid-image.jpg'
import Confirmados from '../../assets/confirmados.jpg'
import PessoaTirandoMascara from '../../assets/people-covid.jpg'

// ESTILOS APLICADOS VIA STYLED-COMPONENTS ABAIXO 
import { Container, ContainerItems, ContainerGraph, Footer } from './styles'


function Home() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Painel Infectados x Recuperados',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



  const data1 = {
    labels,
    datasets: [
      {
        label: 'Infectados',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255,0,0, 1)',
      },
      {
        label: 'Recuperados',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(0, 128, 0, 5)',
      },
    ],
  };
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("https://covid19.mathdro.id/api")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  var moment = require('moment');
  moment().format();

  return (
    <>
      <div><AppBar></AppBar></div>

      <Container className="containerG">
        <ContainerItems className="containerItems">
          <Card className="card1" sx={{ maxWidth: 500, width: 350, backgroundColor: "black", color: "white", marginTop: 5, }}>
            <CardMedia
              component="img"
              height="100"
              src={CovidLogo}
              alt="covid-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ marginTop: -7 }}>
                Mortes
              </Typography>
              <Typography variant="body1" color="white">
                Mortes Acumuladas no Mundo: {data?.deaths.value.toLocaleString(numberFormatter)}
                <p>Atualizado na data {moment().format("DD/MM/yyyy HH:mm")}</p>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card2" sx={{ maxWidth: 500, width: 350, backgroundColor: "red", color: "white", marginTop: 5 }}>
            <CardMedia
              component="img"
              height="100"
              src={Confirmados}
              alt="casos-confirmados"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ marginTop: -7 }}>
                Infectados
              </Typography>
              <Typography variant="body1" color="white">
                Total de Infectados no Mundo: {data?.confirmed.value.toLocaleString(numberFormatter)}
                <p>Atualizado na data {moment().format("DD/MM/yyyy HH:mm")}</p>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card3" sx={{ maxWidth: 500, width: 350, backgroundColor: "green", color: "white", marginTop: 5 }}>
            <CardMedia
              component="img"
              height="100"
              src={PessoaTirandoMascara}
              alt="pessoa-tirando-mascara"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ marginTop: -7 }}>
                Recuperados
              </Typography>
              <Typography variant="body1" color="white">
                Total de Recuperados no Mundo : {data?.recovered.value.toLocaleString(numberFormatter)}
                <p>Atualizado na data {moment().format("DD/MM/yyyy HH:mm")}</p>
              </Typography>
            </CardContent>
          </Card>
        </ContainerItems>

        <ContainerGraph>
          <Bar options={options} data={data1} />;
        </ContainerGraph>


        <Footer>
          <p>© 2022 Copyright - Vinicius Fonseca</p>
        </Footer>

      </Container>

    </>
  );
}

export default Home;
