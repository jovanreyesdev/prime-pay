import React from 'react';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import Mobile from 'public/images/about/mobile.png';

function About() {
  return (
    <div className="pt-20 pb-20 xl:pt-40 xl:pb-40 mx-auto xl:border-b xl:border-solid xl:border-gray-300 max-w-content">
      <div className="flex flex-col xl:flex-row items-center p-stats sm:p-statsSm xl:p-statsLg">
        <div className="flex-1 mb-16">
          <div className="px-7 lg:px-0" style={{ maxWidth: 560 }}>
            <div className="leading-none sm:text-subscribeSm md:text-subscribeMd lg:text-subscribeLg text-grey font-jost font-semibold mb-7 text-5xl">
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
        <div className="relative bg-contain bg-no-repeat bg-center w-full lg:w-aboutMobile bg-about" style={{ height: 462 }}> 
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
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start mx-w-full xl:mx-w-stats py-12 xl:py-24">
          <div className="text-center mb-10 xl:mb-0 xl:border-r border-solid border-gray-300 px-12 lg:px-16">
            <div className="font-jost font-semibold text-3xl lg:text-4xl">
              120M +
            </div>
            <div className="font-open-sans font-xl">
              Downloaded
            </div>
          </div>
          <div className="text-center mb-10 xl:mb-0 xl:border-r border-solid border-gray-300 px-12 lg:px-16">
            <div className="font-jost font-semibold text-3xl lg:text-4xl">
              $10M +
            </div>
            <div className="font-open-sans font-xl">
              Transactions
            </div>
          </div>
          <div className="text-center mb-10 xl:mb-0 px-12 lg:px-16">
            <div className="font-jost font-semibold text-3xl lg:text-4xl">
              1000 +
            </div>
            <div className="font-open-sans font-xl">
              Positive Feedbacks
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
