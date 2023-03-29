import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import HeaderBG from 'public/images/header/bg.png';
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
        className="bg-header mx-auto rounded-3xl relative"
        style={{
          height: 1029,
          maxWidth: 1744,
          backgroundImage: `url(${HeaderBG.src})`
        }}
      >
        <div className="pt-32 relative">
          <h1 className="mx-auto text-primary text-center font-jost font-semibold mb-8" style={{ fontSize: 80, maxWidth: 796 }}>
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
          <ReactSVG className="absolute" style={{ bottom: '9rem', right: 532 }} src="images/header/object_1.svg" />
          <ReactSVG className="absolute" style={{ bottom: '6rem', right: 481 }} src="images/header/object_2.svg" />
          <ReactSVG className="absolute" style={{ bottom: '3rem', right: 572 }} src="images/header/object_3.svg" />
        </div>
      </div>
      <ReactSVG className="absolute top-0 left-16" src="images/header/pattern_1.svg" />
      <ReactSVG className="absolute top-0" style={{ left: '34rem' }} src="images/header/pattern_2.svg" />
      <ReactSVG  className="absolute top-0 right-16" src="images/header/pattern_3.svg" />
      <ReactSVG className="absolute top-10 left-10" src="images/header/objects.svg" />
      <Image className="absolute" style={{ top: 541, left: 316 }} src={Cash.src} height={156} width={211} />
      <Image className="absolute" style={{ top: 738, right: 316 }} src={Card.src} height={156} width={211} />
      <Image className="absolute" style={{ bottom: -306, left: 445 }} src={Chat.src} height={156} width={211} />
    </div>
  )
}

export default Header;