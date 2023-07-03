"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

// photos
import media1 from "../../../public/assets/website/media1.jpg";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <h2>Media</h2>

        <Carousel className="w-1/3 bg-transparent h-1/2">
          <div>
            <Image src={media1} alt="image1" />
          </div>
          <div>
            <Image src={media1} alt="image1" />
          </div>
          <div>
            <Image src={media1} alt="image1" />
          </div>
          <div>
            <Image src={media1} alt="image1" />
          </div>
          <div>
            <Image src={media1} alt="image1" />
          </div>
        </Carousel>

        <br></br>
      </div>
    );
  }
}
