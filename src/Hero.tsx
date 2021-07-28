import React, { FC } from 'react';
import { Button } from './Button';

export interface HeroProps {
  title: string;
  subtitle: string;
  textColor: string;
  image: string;
  ctaText: string;
}

export const Hero: FC<HeroProps> = ({
  title = "Pure, Soft, Organic!",
  subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth.",
  textColor = "gray-500",
  image,
  ctaText = "Read More"
}) => {
  return (
    <div className="w-full relative">      
      <div className={`w-full h-2/3 md:w-full md:h-full absolute top-0 left-0 bg-primary-bg opacity-75`}>
      </div>
      <img src={image} className='w-full h-2/3 md:w-full md:h-full'/>
      <div className="z-10 w-full h-full flex flex-col justify-center items-center md:absolute md:top-0 md:left-0 md:px-16 md:items-start ">
        <div className={`text-${textColor} w-full text-2xl pt-8 font-serif md:w-1/3 md:py-2 md:text-4xl`}>{title}</div>
        <div className={`text-${textColor} w-full py-4 text-base font-sans font-thin md:w-2/5 md:py-8 md:text-xl`}>{subtitle}</div>
        <div><Button text={ctaText}/></div>
        <div><button className="btn btn-primary">DaisyUI Button</button></div>
      </div> 
    </div>
  );
};
