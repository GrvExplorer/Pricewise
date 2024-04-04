'use client'

import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import HeroCarousel from "./HeroCarousel";

function HeroCard() {
  return (
    <div className="">

    <div className="flex gap-16 max-xl:flex-col mt-32">
      <div className="flex flex-col gap-6 justify-center">
        <p className="small-text">
          Smart Shopping Starts Here
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </p>
        <h1 className="head-text">
          Unleash the Power of
          <span className="text-primary"> PriceWise</span>
        </h1>{" "}
        <p className="mt-6">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more.
        </p>
        <SearchBar />
      </div>
      <HeroCarousel />
    </div>
    <h2 className="section-text">Trending</h2>
    </div>
  );
}

export default HeroCard;
