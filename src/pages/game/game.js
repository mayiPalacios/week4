import React from "react";
import { Fragment } from "react";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MainGame from "../../components/layout/mainGame";
import Header from "../../components/layout/header";
class  Game extends React.Component {

 
    render() {
      return (
        <Fragment>
          <Header/>
            <MainGame/>
            <Footer/>
        </Fragment>

      );
    }
  }
  
  export default Game;