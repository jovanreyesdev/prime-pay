import React from 'react';
import { ReactSVG } from 'react-svg';

function NavigationBar() {
  return (
    <nav className="py-10 mx-auto" style={{ maxWidth: 1400 }}>
      <div className="flex justify-between">
        <ReactSVG
          src="/primepay-logo.svg"
          height={53}
          width={186}
        />
        <div className="flex items-center">
          <div className="flex font-inter text-lg mr-44">
            <div className="mr-7">About Us</div>
            <div className="mr-7">Features</div>
            <div className="mr-7">Pricing</div>
            <div className="mr-7">Blog</div>
          </div>
          <button
            type="button"
            className="bg-primary rounded-button text-white w-36 h-16 font-inter"
            >
              LOGIN
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;