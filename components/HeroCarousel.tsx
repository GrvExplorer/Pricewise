import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel
        // infiniteLoop
        // autoPlay
        // // interval={2000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {heroImages.map(({ imgUrl, alt }) => (
          <Image src={imgUrl} alt={alt} 
          width={484}
          height={484}
          key={imgUrl}
          className="object-contain" />
          
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
