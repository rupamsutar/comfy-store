import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="">
        <h1 className="text-center sm:text-left max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
        </h1>
        <p className="text-center sm:text-left mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores reiciendis doloribus eligendi, nisi ullam accusantium deserunt, eius quasi eaque corrupti, sunt vel. Tempora labore magni iusto accusantium quidem, voluptas esse?
        </p>
        <div className="mt-10 mx-auto sm:mx-0 w-[140px]">
            <Link to='/products' className="btn btn-primary">
                Our Products
            </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item" >
              <img
                src={image}
                alt="carousel-item"
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
