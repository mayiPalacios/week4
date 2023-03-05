import React from "react";
import { Fragment } from "react";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";

class  Game extends React.Component {

 
    render() {
      return (
        <Fragment>
            <Navbar/>
            <Footer/>
        </Fragment>

      );
    }
  }
  
  export default Game;