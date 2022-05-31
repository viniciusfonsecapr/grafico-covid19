import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Icone do CoronaVirus abaixo 
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

// Estilos Aplicados em Determiandos Itens abaixo
import { H1, BoxMenu } from './styles'


export default function ButtonAppBar() {
  return (
    <BoxMenu>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1}}
          >
            <MenuIcon sx ={{position: "absolute" , marginLeft:210}} className="MenuIcon"/>
          </IconButton>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            <H1><CoronavirusIcon></CoronavirusIcon>ESTATÍSTICAS DO COVID-19</H1>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </BoxMenu>
  );
}