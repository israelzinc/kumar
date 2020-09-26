import React from 'react';

import { ThemeProvider } from 'react-jss';
import theme from '../app-theme';

import useStyles from './simple.styles';
import Navbar from 'react-bootstrap/Navbar';

// import {NavDropdown, Nav} from "react-bootstrap/";
// import bear from "../resources/bear.png"
// import reactLogo from "../logo.svg"
import logo from "../big.png"

import "../App.css"

export interface Props {
    mainElement: React.ReactElement;    
}

const HalfColsLayoutThemeWrapper: React.FC<Props> = props =>
  <ThemeProvider theme={ theme }>
    <SimpleLayout { ...props } />
    </ThemeProvider>

const SimpleLayout: React.FC<Props> = ({ mainElement }) => {
  const styles = useStyles();

  return (
    <>
      {/* <Navbar fixed="top" bg="dark" variant="dark" style = {{ height: '84px' }}> */}
      {/* <Navbar>
        <Navbar.Brand>
          <img          
            src={bear}
            height = "70px"
            className= "d-inline-block align-top App-logo"            
            alt = "kumar-logo"
          />
        </Navbar.Brand>         */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text>
          ようこそ！熊AR
          </Navbar.Text>                    
        </Navbar.Collapse> */}
      {/* </Navbar> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />くまモン１０年週
        </Navbar.Brand>
      </Navbar>
      <div className = { styles.mainLayout } >        
        <div className = "simple-column" >
          { mainElement }
        </div>
      </div>
    </>
  );
}

export default HalfColsLayoutThemeWrapper;