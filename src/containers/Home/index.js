import React, { useEffect, useState } from "react";
import api from '../../services/api'


// ABAIXO ITENS DO MATERIAL UI USADOS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTADOS ABAIXO 

import AppBar from '../../components/AppBar'

// ABAIXO IMAGENS USADAS NO PROJETO
import DistanciaSegura from '../../assets/distancia-segura.svg'
import CovidLogo from '../../assets/covid-image.jpg'
import Confirmados from '../../assets/confirmados.jpg'
import PessoaTirandoMascara from '../../assets/people-covid.jpg'

// ESTILOS APLICADOS VIA STYLED-COMPONENTS ABAIXO 
import { Container, MessageForPeoples, ContainerItems } from './styles'


function Home() {

  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("https://covid19.mathdro.id/api")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


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
              <Typography gutterBottom variant="h5" component="div" style={{marginTop: -7}}>
                Mortes
              </Typography>
              <Typography variant="body1" color="white">
                Mortes acumulados no mundo: {data?.deaths.value}
                <p>Atualizado na data {data?.lastUpdate}</p>
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
              <Typography gutterBottom variant="h5" component="div" style={{marginTop: -7}}>
                Infectados
              </Typography>
              <Typography variant="body1" color="white">
                Total de infectados no mundo: {data?.confirmed.value}
                <p>Atualizado na data {data?.lastUpdate}</p>
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
              <Typography gutterBottom variant="h5" component="div" style={{marginTop: -7}}>
                Recuperados
              </Typography>
              <Typography variant="body1" color="white">
                Total de Recuperados no Mundo : {data?.recovered.value}
                <p>Atualizado na data {data?.lastUpdate}</p>
              </Typography>
            </CardContent>
          </Card>
        </ContainerItems>

        <MessageForPeoples className="MessagePeoples">
          <img src={DistanciaSegura} alt="distancia-segura"></img>
          <p>Fique seguro, mantenha o distanciamento social</p>
        </MessageForPeoples>
      </Container>

    </>
  );
}

export default Home;
