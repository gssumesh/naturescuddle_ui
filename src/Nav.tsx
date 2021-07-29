import React, { FC } from 'react';
const logo =  require("./images/logo.png");
import { GiShoppingBag } from 'react-icons/gi';

export interface NavProps {}

export const Nav: FC<NavProps> = ({}) => {
  return (
    <div className="navbar mb-2 bg-primary-bg text-primary rounded-box">
      <div className="px-2 mx-2 navbar-start">
        {/* <span className="text-lg font-bold">DaisyUI</span> */}
        <img src={logo} className="max-h-20"/>
      </div>
      <div className="navbar-center hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn text-nc-dark-sage">Shop</a>
          <a className="btn btn-ghost btn-sm rounded-btn text-nc-dark-sage">Learn</a>
          <a className="btn btn-ghost btn-sm rounded-btn text-nc-dark-sage">About</a>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <GiShoppingBag size="2em" className="text-nc-sage m-auto"/>
        </button>
      </div>
    </div>
  );
};
