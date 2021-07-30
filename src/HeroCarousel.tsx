import React, { FC } from 'react';
const watch = require('./images/watch.jpg');
const pen = require('./images/jonathan-borba--W1-1nSZJw8-unsplash.jpg');
const baby_room = require('./images/baby-room-2483655_1920.jpg');

import { GiFeather, GiCottonFlower } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

export interface HeroCarouselProps {
  title: string;
  subtitle: string;
  // textColor: string;
  // image: string;
  ctaText: string;
}

export const HeroCarousel: FC<HeroCarouselProps> = ({
  title = 'Pure, Soft, Organic!',
  subtitle = 'Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth.',
  // textColor = "gray-500",
  // image,
  ctaText = 'Read More',
}) => {
  return (
    <div className="carousel">
      <div id="hero-carousel-slide1" className="relative carousel-item hero md:md:min-h-2/3 bg-nc-grey flex flex-col">

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#hero-carousel-slide3" className="invisible lg:visible btn btn-circle btn-sm">❮</a>
          <a href="#hero-carousel-slide2" className="invisible lg:visible btn btn-circle btn-sm">❯</a>
        </div>
        <div className="flex-col hero-content md:w-full lg:flex-row-reverse lg:flex-grow">
          <img src={watch} className="max-w-md w-full" />
          {/* </div> */}
          <div className="w-full">
            <h1 className="mb-5 text-xl md:text-4xl font-bold">{title}</h1>
            <p className="mb-5 text-sm md:text-base font-serif md:w-2/3">
              {subtitle}
            </p>
            <button className="btn btn-primary btn-wide rounded-none">
              {ctaText}
            </button>
            <div className="flex flex-row justify-around md:justify-between w-full md:w-2/5 py-8">
              <div className="flex-col">
                <GiFeather size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Pure</div>
              </div>
              <div className="flex-col">
                <GiCottonFlower size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Organic</div>
              </div>
              <div className="flex-col">
                <AiFillSafetyCertificate size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel-slide2" className="relative carousel-item hero md:md:min-h-2/3 bg-nc-grey-3 flex flex-col">

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#hero-carousel-slide1" className="invisible lg:visible btn btn-circle btn-sm">❮</a>
          <a href="#hero-carousel-slide3" className="invisible lg:visible btn btn-circle btn-sm">❯</a>
        </div>
        <div className="flex-col hero-content md:w-full lg:flex-row-reverse lg:flex-grow">
          {/* <div className={`bg-primary-bg opacity-60`}> */}
          {/* <img src={headset} className="max-w-md rounded-lg shadow-xl" /> */}
          <img src={pen} className="max-w-md w-full" />
          {/* </div> */}
          <div className="w-full">
            <h1 className="mb-5 text-xl md:text-4xl font-bold">{title}</h1>
            <p className="mb-5 text-sm md:text-base font-serif md:w-2/3">
              {subtitle}
            </p>
            <button className="btn btn-primary btn-wide rounded-none">
              {ctaText}
            </button>
            <div className="flex flex-row justify-around md:justify-between w-full md:w-2/5 py-8">
              <div className="flex-col">
                <GiFeather size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Pure</div>
              </div>
              <div className="flex-col">
                <GiCottonFlower size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Organic</div>
              </div>
              <div className="flex-col">
                <AiFillSafetyCertificate size="2em" className="text-nc-sage m-auto pb-2" />
                <div className="mb-2 text-base font-bold">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="hero-carousel-slide3" className="relative carousel-item hero md:md:min-h-2/3 bg-nc-grey-3" style={{ backgroundImage: `url(${baby_room})` }}>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#hero-carousel-slide2" className="invisible lg:visible btn btn-circle btn-sm">❮</a>
          <a href="#hero-carousel-slide1" className="invisible lg:visible btn btn-circle btn-sm">❯</a>
        </div>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold text-primary-bg">
              LAUNCHING <br/> Spring 2021
            </h1>
            <p className="mb-5  text-sm md:text-base text-primary-bg font-quote">
              Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth. Beautifully created swaddles are pre-washed, thereby reducing the shrinkage and get softer with every wash, making a safer choice for the babies’ skin.
            </p>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

      </div>

    </div>
  );
};
