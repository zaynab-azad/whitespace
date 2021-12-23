import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

import "./Service.css";

const data = [
  {
    img: "./images/006-painting roller.png",
    service: "Painting",
  },
  {
    img: "./images/003-light bulb.png",
    service: "Light",
  },
  {
    img: "./images/005-broom.png",
    service: "Cleaning",
  },
  {
    img: "./images/006-painting roller.png",
    service: "Painting",
  },
  {
    img: "./images/003-light bulb.png",
    service: "Light",
  },
  {
    img: "./images/005-broom.png",
    service: "Cleaning",
  },
  {
    img: "./images/006-painting roller.png",
    service: "Painting",
  },
  {
    img: "./images/003-light bulb.png",
    service: "Light",
  },
  {
    img: "./images/005-broom.png",
    service: "Cleaning",
  },
  {
    img: "./images/006-painting roller.png",
    service: "Painting",
  },
  {
    img: "./images/003-light bulb.png",
    service: "Light",
  },
  {
    img: "./images/005-broom.png",
    service: "Cleaning",
  },
  {
    img: "./images/006-painting roller.png",
    service: "Painting",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 },
  { width: 1200, itemsToShow: 7 },
  { width: 1200, itemsToShow: 8 },
  { width: 1200, itemsToShow: 9 },
  { width: 1200, itemsToShow: 10 },
];

const Service = () => {
  return (
    <>
      <p className="exploreBy">Explore By Category:</p>
      <Carousel breakPoints={breakPoints}>
        {data.map(({ img, service }) => (
          <>
            <Item>
              <a className="items" target="_blank" href="#">
                <img className="img-slider" src={require(`${img}`)} />
                <p> {service}</p>
              </a>
            </Item>
          </>
        ))}
      </Carousel>
    </>
  );
};

export default Service;
