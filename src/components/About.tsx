import React from 'react';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

import MobileBg from 'public/images/about/mobilebg.png';
import Mobile from 'public/images/about/mobile.png';

function About() {
  return (
    <div className="pt-40 mx-auto border-b border-solid border-gray-300 max-w-content" style={{ paddingBottom: 275 }}>
      <div className="flex">
        <div className="flex-1 mb-16">
          <div style={{ maxWidth: 560 }}>
            <div className="text-grey font-jost font-semibold mb-7 text-5xl" style={{ fontSize: 50 }}>
              Send and receive <span className="text-primary">payments</span> easily
            </div>
            <div className="font-open-sans text-xl text-content mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            </div>
            <div className="font-open-sans text-xl text-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="border-b border-gray-300 border-solid pt-10 mb-10"></div>
            <div className="flex">
              <div className="mr-5">
                <ReactSVG
                  src="images/about/play.svg"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col justify-center font-open-sans">
                <div className="text-xl font-bold">Lorem Ipsum Dolor Sit</div>
                <div style={{ color: '#7D5FFF' }}>Amet, Consectetur</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={MobileBg.src}
            width={703}
            height={507}
            alt="Background"
          />
          <Image
            src={Mobile.src}
            width={406}
            height={867}
            alt="Mobile"
            className="absolute about-mobile"
          />
        </div>
      </div>
      <div className="bg-background">
        <div className="flex" style={{ padding: '91.5px 0', maxWidth: 812 }}>
          <div className="border-r border-solid border-gray-300 px-16">
            <div className="font-jost font-semibold text-4xl">
              120M +
            </div>
            <div className="font-open-sans font-xl">
              Downloaded
            </div>
          </div>
          <div className="border-r border-solid border-gray-300 px-16">
            <div className="font-jost font-semibold text-4xl">
              $10 M
            </div>
            <div className="font-open-sans font-xl">
              Transactions
            </div>
          </div>
          <div className="px-16">
            <div className="font-jost font-semibold text-4xl">
              1.000 +
            </div>
            <div className="font-open-sans font-xl">
              Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
