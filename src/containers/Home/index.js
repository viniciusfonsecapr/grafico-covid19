import React, { useEffect, useState } from "react";
import api from '../../services/api'

// IMPORTAÇÕES CHART.JS

import {
  Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
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
import { Container, ContainerItems, ContainerGraph1, Footer } from './styles'

function Home() {


  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title);

  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("https://covid19.mathdro.id/api")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const dataGraph1 = {
    labels: ['Infectados', 'Recuperados', 'Mortos'],
    datasets: [
      {
        label: '# of Votes',
        data: [data?.confirmed.value, data?.recovered.value, data?.deaths.value],
        backgroundColor: [
          'rgba(237, 0, 17, 0.2)',
          'rgba(14, 237, 25, 0.2)',
          'rgba(1, 1, 1, 0.3)',
        ],
        borderColor: [
          'rgba(237, 0, 17, 1)',
          'rgba(14, 237, 25, 1))',
          'rgba(1, 1, 1, 0.8)',
        ],
        borderWidth: 1,

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
      },
      title: {
        display: true,
        text: 'Graficos de Dados no Mundo',
      },
    },
  };

  const labels = ['De 2020 a 2021']

  const dataGraph2 = {
    labels,
    datasets: [
      {
        label: 'Infectados',
        data: labels.map(() => data?.confirmed.value),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Recuperados',
        data: labels.map(() => data?.recovered.value),
        backgroundColor: 'rgba(14, 237, 25, 0.2)',
      },
      {
        label: 'Mortos',
        data: labels.map(() => data?.deaths.value),
        borderColor: 'rgb(1, 1, 1)',
        backgroundColor: 'rgba(1, 1, 1, 0.2)',
      },
    ],
  };

  var moment = require('moment');
  moment().format();


  // ABAIXO FICAM OS ARQUIVOS DA APLICAÇÃO 

  return (
    <>
      <div><AppBar></AppBar></div>

      <Container>
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
              <Typography component="span" variant="body1" color="white">
                <p>Mortes Acumuladas no Mundo: {data?.deaths.value.toLocaleString(numberFormatter)}</p>
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
              <Typography component="span" variant="body1" color="white">
                <p>Total de Infectados no Mundo: {data?.confirmed.value.toLocaleString(numberFormatter)}</p>
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
              <Typography component="span" variant="body1" color="white">
                <p>Total de Recuperados no Mundo : {data?.recovered.value.toLocaleString(numberFormatter)}</p>
                <p>Atualizado na data {moment().format("DD/MM/yyyy HH:mm")}</p>
              </Typography>
            </CardContent>
          </Card>
        </ContainerItems>

        <ContainerGraph1>
          <div><Pie data={dataGraph1} /></div>

          <div><Bar options={options} data={dataGraph2} /></div>
        </ContainerGraph1>

        <Footer>
          <p>© 2022 Copyright - Vinicius Fonseca</p>
          <a target="_blank" href="https://icons8.com/icon/HFM0KDhZC8E5/covid19" rel="noreferrer">Covid19 icon by</a>  <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
        </Footer>
      </Container>

    </>
  );
}

export default Home;
