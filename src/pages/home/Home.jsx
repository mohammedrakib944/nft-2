import React from "react";
import Nav from "../../components/nav/Nav";
import Slider from "react-slick";
import { settings } from "../../assets/settings";
import "./home.css";
import SliderC from "../../components/sCard/SliderC";
import { sliderData, cardData } from "./data";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="landing">
              <h2>Discover, collect, and sell extraordinary NFTs</h2>
            </div>
            <br />
            <div className="sliders">
              <h3 className="title">Top Sellers</h3>
              <Slider {...settings}>
                {sliderData.map((val, index) => (
                  <Link to={val.link}>
                    <SliderC key={index} data={val} />
                  </Link>
                ))}
              </Slider>
            </div>
            <br />
            <div className="mainSection">
              <h3 className="title">Hot Bids</h3>
              <div className="allCards">
                {cardData.map((val, index) => (
                  <Link to="/nft" key={index}>
                    <Card data={val} />
                  </Link>
                ))}
              </div>

              <div className="loadMore">
                <button>Load More</button>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
