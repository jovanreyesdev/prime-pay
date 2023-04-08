import React from 'react';
import SubscribeBg from 'public/images/footer/subscribebg.png';
import { ReactSVG } from 'react-svg';

function Footer() {
  return (
    <footer>
      <div className="mx-auto lg:pt-30 xl:pt-40">
        <div className="flex bg-background mx-auto items-end justify-center mx-auto max-w-container xl:h-subscribe">
          <div
            className="flex flex-col lg:flex-row w-full mx-auto max-w-content 2xl:max-w-contentXl bg-subscribe bg-cover xl:bg-contain bg-no-repeat bg-center p-subscribe md-subscribeMd lg:p-subscribeLg"
          >
            <div className="leading-none mb-5 flex-1 font-jost text-primary font-semibold text-subscribe sm:text-subscribeSm lg:text-subscribeLg">
              Take control of your
              personal <span className="text-white">finances today</span>
            </div>
            <div className="flex items-center flex-1">
              <div className="flex flex-col lg:flex-row lg:justify-end flex-1">
                <input
                  className="w-full lg:w-min lg:min-w-subscribeInputLg mb-5 lg:mb-0 rounded-button p-5 mr-6 font-open-sans"
                  placeholder="Enter your email"
                  type="text"
                />
                <button className="rounded-button p-5 font-inter text-white bg-primary" style={{ minWidth: 160 }} type="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background mx-auto max-w-container p-footerLinks lg:p-footerLinksLg xl:p-footerLinksXl">
          <div className="flex flex-col xl:flex-row mx-auto max-w-content 2xl:max-w-contentXl px-14 xl:px-0">
            <div className="mb-20">
              <div className="mb-8">
                <ReactSVG src="/primepay-logo.svg" height="57" width="186" />
              </div>
              <div className="font-open-sans leading-normal text-xl mb-8" style={{ maxWidth: 445 }}>
                Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non 
                sagittis aliquam bibendum.
              </div>
              <div className="flex items-center justify-between" style={{ maxWidth: 223 }}>
                <ReactSVG src="/images/footer/insta.svg" />
                <ReactSVG src="/images/footer/facebook.svg" />
                <ReactSVG src="/images/footer/twitter.svg" />
                <ReactSVG src="/images/footer/linkedin.svg" />
                <ReactSVG src="/images/footer/youtube.svg" />
              </div>
            </div>
            <div className="hidden lg:block lg:mx-14 xl:mx-20 border-r border-solid border-gray-300" />
            <div className="flex flex-col lg:flex-row justify-between flex-1">
              <div className="mb-20">
                <div className="text-3xl text-primary font-jost font-semibold mb-5">
                  Menu
                </div>
                <div className="text-xl mb-3">About</div>
                <div className="text-xl mb-3">Features</div>
                <div className="text-xl mb-3">
                  <span>Pricing</span>
                  <span className="ml-3 text-white font-semibold rounded text-sm bg-green py-1 rounded-full px-2">OFFER</span>
                </div>
                <div className="text-xl mb-3">Blog</div>
                <div className="text-xl mb-3">How it Work</div>
              </div>
              <div className="mb-20">
                <div className="text-3xl text-primary font-jost font-semibold mb-5">
                  Utility Pages
                </div>
                <div className="text-xl mb-3">Style guide</div>
                <div className="text-xl mb-3">Password protected</div>
                <div className="text-xl mb-3">
                  <span>404 Not found</span>
                </div>
                <div className="text-xl mb-3">Licenses</div>
                <div className="text-xl mb-3">Changelog</div>
              </div>
              <div className="mb-20">
                <div className="text-3xl text-primary font-jost font-semibold mb-5">
                  Address & Contact
                </div>
                <div className="text-xl mb-20">
                  1700 W Blancke St, kiyev
                  <br/>
                  port south USA, America
                </div>
                <div className="text-xl mb-3">+3255 456 789</div>
                <div className="text-xl mb-5 lg:mb-10">mail@primepay.com</div>
                <button type="button" className="rounded-button py-3 px-6 bg-purple text-white font-inter">GET A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-open-sans md:text-xl py-6 flex flex-col items-center justify-center">
        <div>Copyright © Designed by VictorFlow Templates</div>
        <div className="hidden">|</div>
        <div>Developed by&nbsp;<span className="font-bold">jovanreyesdev</span></div>
      </div>
    </footer>
  )
}

export default Footer;