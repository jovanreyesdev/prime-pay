import React from 'react';
import { ReactSVG } from 'react-svg';

function NavigationBar() {
  return (
    <nav className="py-10 mx-auto max-w-content">
      <div className="flex justify-between mx-10 xl:mx-0">
        <ReactSVG
          src="/primepay-logo.svg"
          height={53}
          width={186}
        />
        <div className="flex items-center hidden lg:flex">
          <div className="flex font-inter text-lg xl:mr-44">
            <div className="mr-7">About Us</div>
            <div className="mr-7">Features</div>
            <div className="mr-7">Pricing</div>
            <div className="mr-7">Blog</div>
          </div>
          <button
            type="button"
            className="hidden lg:block bg-primary rounded-button text-white w-36 h-16 font-inter"
            >
              LOGIN
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;