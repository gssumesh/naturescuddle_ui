import React, { FC } from 'react';
import { Nav } from './Nav';
import { HeroWithCard } from './HeroWithCard';
import { Quote } from './Quote';

export interface PageHomeProps {}

export const PageHome: FC<PageHomeProps> = ({}) => {
  return (
    <div>
      <Nav />
      <HeroWithCard  
        title = "Pure, Soft, Organic!"
        subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth."
        ctaText = "Read More" 
        />
        <Quote 
          text="Some of the most amazing thing in the world happens for a reason and we worked years for this."
        />
    </div>
  );
};
