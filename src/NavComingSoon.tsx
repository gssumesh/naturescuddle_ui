import React, { FC } from 'react';
const logo =  require("./images/logo.png");
import { SiInstagram } from 'react-icons/si';

export interface NavComingSoonProps {}

export const NavComingSoon: FC<NavComingSoonProps> = ({}) => {
  return (
    <div className="navbar sticky top-0 z-50 md:px-8 mb-2 bg-primary-bg text-primary">
      <div className="px-2 mx-2 navbar-start">
        <img src={logo} className="max-h-20"/>
      </div>
      <div className="navbar-center hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <SiInstagram size="2em" className="text-nc-sage m-auto"/>
        </button>
      </div>
    </div>
  );
};
