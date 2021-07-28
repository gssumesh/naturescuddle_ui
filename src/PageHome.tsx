import React, { FC } from 'react';
import { Nav } from './Nav';
import { HeroWithCard } from './HeroWithCard';

export interface PageHomeProps {}

export const PageHome: FC<PageHomeProps> = ({}) => {
  return (
    <div>
      <Nav />
      <HeroWithCard  
        title = "Pure, Soft, Organic!"
        subtitle = "Our swaddles are luxurious soft 100% GOTS certified organic cotton with no hidden nasties, safe for little ones, and kind to the earth."
        ctaText = "Read More" 
        image = "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2736&q=80"
        />
    </div>
  );
};
