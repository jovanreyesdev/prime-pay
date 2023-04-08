import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import Mobile from 'public/images/header/mobile.png';
import Pattern1 from 'public/images/header/pattern_1.png';
import Pattern2 from 'public/images/header/pattern_2.png';
import Pattern3 from 'public/images/header/pattern_3.png';
import Cash from 'public/images/header/cash.png';
import Card from 'public/images/header/card.png';
import Chat from 'public/images/header/chat.png';

function Header() {
  return (
    <div className="mb-20 relative">
      <div
        className="bg-header mx-auto rounded-3xl relative max-w-container bg-header bg-no-repeat bg-center"
        style={{ height: 1029 }}
      >
        <div className="pt-32 relative">
          <h1
            className="mx-auto text-primary text-center font-jost font-semibold mb-8 text-header sm:text-headerSm lg:text-headerLg"
            style={{ maxWidth: 796 }}
          >
            Ready To Launch Your
            Online <span className="text-white">Payment</span> App
          </h1>
          <div className="text-center text-primary text-2xl font-semibold mb-8">
           Making online payments safer and simpler
          </div>
          <button type="button" className="font-inter bg-primary rounded-button text-white mx-auto block" style={{ height: 80, width: 220 }}>
            GET STARTED
          </button>
          <Image
            width={451}
            height={934}
            src={Mobile.src}
            alt="Mobile Phone"
            className="pt-10 mx-auto"
          />
        </div>
      </div>
      <div className="overflow-x-hidden objects flex items-start justify-center">
        <ReactSVG src="images/header/lightpattern.svg" />
      </div>
      <div className="overflow-x-hidden objects flex items-center justify-center">
        <ReactSVG className="twinkle" src="images/header/objects.svg" />
      </div>
      <div className="overflow-x-hidden objects flex items-center justify-center">
        <ReactSVG className="levitate float" src="images/header/objects2.svg" />
      </div>
      <div className="overflow-x-hidden chatobject flex items-center justify-center">
        <ReactSVG className="levitate float2" src="images/header/objects3.svg" />
      </div>
    </div>
  )
}

export default Header;