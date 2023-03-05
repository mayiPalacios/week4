import React from "react";
import { Fragment } from "react";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MainHome from "../../components/layout/mainHome";

class  Home extends React.Component {
     
    render() {
        return (
          <Fragment>
              <Navbar/>
              <MainHome/>
              <Footer/>
          </Fragment>
        );
      }
 }

export default Home;