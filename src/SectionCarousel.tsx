import React, { FC } from 'react';
const jute = require('./images/pexels-teona-swift-6850549.jpg');
const towels = require('./images/towel-1838210_1920.jpg');
const ribbons = require('./images/pexels-karolina-grabowska-4219655.jpg');

export interface SectionCarouselProps {
}

export const SectionCarousel: FC<SectionCarouselProps> = ({
}) => {
  return (
    <div className="w-full">

      <div className="carousel carousel-center md:justify-center space-x-12 md:space-x-24 lg:space-x-48 my-12">
        <div className="carousel-item relative">
          <div className="inset-0 bg-cover bg-center z-0 mask mask-squircle w-48 h-48" style={{ backgroundImage: `url(${jute})` }}></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute mask mask-squircle inset-0 z-10 flex justify-center items-center text-2xl text-primary-bg bg-black font-bold">Organic</div>
        </div>
        <div className="carousel-item relative">
          <div className="inset-0 bg-cover bg-center z-0 mask mask-squircle w-48 h-48" style={{ backgroundImage: `url(${ribbons})` }}></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute mask mask-squircle inset-0 z-10 flex justify-center items-center text-2xl text-primary-bg bg-black font-bold">Pure</div>
        </div>

        <div className="carousel-item relative">
          <div className="inset-0 bg-cover bg-center z-0 mask mask-squircle w-48 h-48" style={{ backgroundImage: `url(${towels})` }}></div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute mask mask-squircle inset-0 z-10 flex justify-center items-center text-2xl text-primary-bg bg-black font-bold">Quality</div>
        </div>
      </div>
    </div>
  );
};
