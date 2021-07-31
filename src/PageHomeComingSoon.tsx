import React, { FC } from 'react';
import { Nav } from './Nav';
import { HeroCarouselComingSoon } from './HeroCarouselComingSoon';
import { Quote } from './Quote';
import { SectionCarousel } from './SectionCarousel';

export interface PageHomeComingSoonProps {}

export const PageHomeComingSoon: FC<PageHomeComingSoonProps> = ({}) => {
  return (
    <div>
      <Nav />
      <HeroCarouselComingSoon />
        <Quote 
          text="Some of the most amazing thing in the world happens for a reason and we worked years for this."
        />
        <SectionCarousel />
    </div>
  );
};
