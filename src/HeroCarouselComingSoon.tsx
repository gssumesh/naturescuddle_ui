import React, { FC } from 'react';


export interface HeroCarouselComingSoonProps {
}

export const HeroCarouselComingSoon: FC<HeroCarouselComingSoonProps> = ({
}) => {
  return (
    <div className="carousel">
      <div id="hero-carousel-slide4" className="relative carousel-item hero md:md:min-h-2/3 bg-nc-grey-3" >
        <div className="hero-overlay bg-opacity-100"></div>
        <div className="text-center hero-content text-neutral-content py-32">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold text-primary-bg">
              LAUNCHING <br/> Spring 2021
            </h1>
            <p className="mb-5  text-sm md:text-base text-primary-bg font-quote">
              Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth. Beautifully created swaddles are pre-washed, thereby reducing the shrinkage and get softer with every wash, making a safer choice for the babies’ skin.
            </p>
            <div 
              className="ml-form-embed"
              data-account="3287740:g2t9b1j3u1"
              data-form="4488415:k2i8y2"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
