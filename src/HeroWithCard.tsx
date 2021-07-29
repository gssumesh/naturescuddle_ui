import React, { FC } from 'react';
const watch = require('./images/watch.jpg');
import { GiFeather, GiCottonFlower } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

export interface HeroWithCardProps {
  title: string;
  subtitle: string;
  // textColor: string;
  // image: string;
  ctaText: string;
}

export const HeroWithCard: FC<HeroWithCardProps> = ({
  title = 'Pure, Soft, Organic!',
  subtitle = 'Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth.',
  // textColor = "gray-500",
  // image,
  ctaText = 'Read More',
}) => {
  return (
    <div className="hero md:min-h-screen bg-nc-grey flex flex-col">
      <div className="flex-col hero-content md:w-full lg:flex-row-reverse lg:flex-grow">
        {/* <div className={`bg-primary-bg opacity-60`}> */}
        {/* <img src={headset} className="max-w-md rounded-lg shadow-xl" /> */}
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
  );
};
