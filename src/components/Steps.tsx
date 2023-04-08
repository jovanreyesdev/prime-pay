import React from 'react';
import { ReactSVG } from 'react-svg';

function Steps() {
  return (
    <div
      className="relative bg-background mx-auto rounded-3xl overflow-x-hidden max-w-container z-negative p-steps lg:p-stepsLg">
      <div className="absolute flex items-start justify-center top-0 left-0 right-0">
        <ReactSVG
          width={322}
          height={87}
          src="images/objects.svg"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-content 2xl:max-w-contentXl">
        <div className="mb-20 lg:mb-0" style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_1.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Create An Account
          </div>
          <div className="text-center pt-8 font-open-sans text-content px-10">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
        <div className="mb-20 lg:mb-0" style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_2.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Attach bank accounts
          </div>
          <div className="text-center pt-8 font-open-sans text-content px-10">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
        <div className="mb-20 lg:mb-0" style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_3.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Send money
          </div>
          <div className="text-center pt-8 font-open-sans text-content px-10">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps;