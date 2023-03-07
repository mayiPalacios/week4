import React from "react";
import { Fragment } from "react";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";
import MainGame from "../../components/layout/mainGame";
import Header from "../../components/layout/header";
import AllCards from "../../components/cards/allCards";

const AllItems = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <AllCards />
      <Footer />
    </Fragment>
  );
};

export default AllItems;
