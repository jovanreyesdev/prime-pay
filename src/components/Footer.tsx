import React from 'react';
import SubscribeBg from 'public/images/footer/subscribebg.png';
import { ReactSVG } from 'react-svg';

function Footer() {
  console.log(SubscribeBg.src);
  return (
    <footer>
      <div className="mx-auto pt-40" style={{ maxWidth: 1747 }}>
        <div className="flex bg-background mx-auto items-end justify-center mx-auto" style={{ maxHeight: 150, maxWidth: 1747 }}>
          <div className="flex w-full mx-auto" style={{ padding: '94px 55px', background: `url(${SubscribeBg.src})`, maxWidth: 1400, height: 299 }}>
            <div className="leading-none flex-1 font-jost text-primary font-semibold" style={{ fontSize: 55 }}>
              Take control of your
              personal <span className="text-white">finances today</span>
            </div>
            <div className="flex items-center flex-1">
              <div className="flex justify-end flex-1">
                <input
                  className="rounded-button p-5 mr-6 font-open-sans"
                  placeholder="Enter your email"
                  type="text"
                  style={{
                    minWidth: 347
                  }}
                />
                <button className="rounded-button p-5 font-inter text-white bg-primary" style={{ minWidth: 160 }} type="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background mx-auto" style={{ paddingBottom: 107, paddingTop: 263, maxWidth: 1747 }}>
          <div className="flex mx-auto" style={{ maxWidth: 1400 }}>
            <div className="">
              <div className="mb-8">
                <ReactSVG src="/primepay-logo.svg" height="57" width="186" />
              </div>
              <div className="font-open-sans text-xl mb-8" style={{ maxWidth: 445 }}>
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
            <div className="mx-20 border-r border-solid border-gray-300" />
            <div className="flex justify-between flex-1">
              <div>
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
              <div>
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
              <div>
                <div className="text-3xl text-primary font-jost font-semibold mb-5">
                  Address & Contact
                </div>
                <div className="text-xl mb-20">
                  1700 W Blancke St, kiyev
                  <br/>
                  port south USA, America
                </div>
                <div className="text-xl mb-3">+3255 456 789</div>
                <div className="text-xl mb-3">mail@primpay.com</div>
                <button type="button" className="rounded-button py-3 px-6 bg-purple text-white font-inter">GET A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-open-sans text-xl py-6 flex justify-center">
        Copyright © Designed by VictorFlow Templates | Developed by&nbsp;<span className="font-bold">jovanreyesdev</span>
      </div>
    </footer>
  )
}

export default Footer;