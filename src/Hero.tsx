import React, { FC } from 'react';

export interface HeroProps {
  text: string;
  textColor: string;
  image: string;
}

export const Hero: FC<HeroProps> = ({
  text,
  textColor = "primary-bg",
  image
}) => {
  return (
    <div className="w-full relative">      
      <div className={`w-full h-full absolute top-0 left-0 bg-primary-bg opacity-40`}>
      </div>
      <div className="w-full h-full flex flex-col absolute top-0 left-0 pb-4 justify-center items-center">
        <div className={`text-${textColor} text-6xl font-serif`}>{text}</div>
      </div> 
      <img src={image} />
    </div>
  );
};
