import React, { FC } from 'react';

export interface HeroWithCardProps {
  title: string;
  subtitle: string;
  // textColor: string;
  image: string;
  ctaText: string;
}

export const HeroWithCard: FC<HeroWithCardProps> = ({
  title = "Pure, Soft, Organic!",
  subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth.",
  // textColor = "gray-500",
  image,
  ctaText = "Read More"
}) => {
  return (
    <div className="hero min-h-screen bg-primary-bg">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl"/> 
    <div>
      <h1 className="mb-5 text-5xl font-bold">
            {title}
          </h1> 
      <p className="mb-5">
            {subtitle}
          </p> 
      <button className="btn btn-primary">{ctaText}</button>
    </div>
  </div>
</div>
  );
};
