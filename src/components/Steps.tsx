import React from 'react';
import { ReactSVG } from 'react-svg';

function Steps() {
  return (
    <div className="bg-background mx-auto rounded-3xl pb-40" style={{ paddingTop: 496, maxWidth: 1744 }}>
      <div className="flex justify-between mx-auto" style={{ maxWidth: 1400 }}>
        <div style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_1.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Create An Account
          </div>
          <div className="text-center pt-8 font-open-sans text-content">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
        <div style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_2.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Attach bank accounts
          </div>
          <div className="text-center pt-8 font-open-sans text-content">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
        <div style={{ maxWidth: 430 }}>
          <div className="flex justify-center">
            <ReactSVG width={322} height={87} src="images/steps/step_3.svg" />
          </div>
          <div className="text-center pt-8 font-jost font-medium text-3xl">
            Send money
          </div>
          <div className="text-center pt-8 font-open-sans text-content">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps;