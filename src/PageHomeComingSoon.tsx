import React, { FC } from 'react';
import { NavComingSoon } from './NavComingSoon';
import { HeroCarouselComingSoon } from './HeroCarouselComingSoon';
import { Quote } from './Quote';
import { SectionCarousel } from './SectionCarousel';

export interface PageHomeComingSoonProps {}

export const PageHomeComingSoon: FC<PageHomeComingSoonProps> = ({}) => {
  return (
    <div>
      <NavComingSoon />
      <HeroCarouselComingSoon />
        <Quote 
          text="Some of the most amazing thing in the world happens for a reason and we worked years for this."
        />
        <SectionCarousel />
    </div>
  );
};
