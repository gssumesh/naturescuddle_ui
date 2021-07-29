import React, { FC } from 'react';

export interface QuoteProps {
  text: string;
}

export const Quote: FC<QuoteProps> = ({
  text = "Some of the most amazing thing in the world happens for a reason and we worked years for this.",
}) => {
  return (
    <div className="w-full flex flex-col">
          <div className="mt-16 mb-2 text-lg font-quote text-center">"{text}"</div>
          <button className="btn mb-16 btn-ghost btn-wide rounded-none m-auto">
            SHOP PRODUCTS
          </button>
    </div>
  );
};
