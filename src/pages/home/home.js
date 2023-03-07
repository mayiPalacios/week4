import React from "react";
import { Fragment } from "react";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MainHome from "../../components/layout/mainHome";
import Header from "../../components/layout/header";
const Home = ({ setRoute }) => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <MainHome setRoute={setRoute} />
      <Footer />
    </Fragment>
  );
};

export default Home;
