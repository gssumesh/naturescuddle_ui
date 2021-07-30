import React, { FC } from 'react';
import { Nav } from './Nav';
import { HeroCarousel } from './HeroCarousel';
import { Quote } from './Quote';
import { SectionCarousel } from './SectionCarousel';

export interface PageHomeProps {}

export const PageHome: FC<PageHomeProps> = ({}) => {
  return (
    <div>
      <Nav />
      <HeroCarousel  
        title = "Pure, Soft, Organic!"
        subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth."
        ctaText = "Read More" 
        />
        <Quote 
          text="Some of the most amazing thing in the world happens for a reason and we worked years for this."
        />
        <SectionCarousel />
    </div>
  );
};
