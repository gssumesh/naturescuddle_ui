import React, { FC } from 'react';
const bottle = require("./images/bottle.jpeg");

export interface HeroWithCardProps {
  title: string;
  subtitle: string;
  // textColor: string;
  // image: string;
  ctaText: string;
}

export const HeroWithCard: FC<HeroWithCardProps> = ({
  title = "Pure, Soft, Organic!",
  subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth.",
  // textColor = "gray-500",
  // image,
  ctaText = "Read More"
}) => {
  return (
    <div className="hero min-h-screen bg-primary-bg">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className={`bg-primary-bg opacity-60`}>
          <img src={bottle} className="max-w-md rounded-lg shadow-xl" />
        </div>
        <div>
          <h1 className="mb-5 text-6xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-2xl font-serif text-nc-dark-sage">
            {subtitle}
          </p>
          <button className="btn btn-primary bg-nc-sage border-nc-sage btn-wide rounded-none">{ctaText}</button>
        </div>
      </div>
    </div>
  );
};
