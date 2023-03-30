import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PrimePay is an online payment application that provides a simple and secure payment gateway for making online payments using credit or debit cards. Developed by Jovan Reyes using React, NextJS, Typescript, and Tailwind CSS." />
        <meta name="keywords" content="PrimePay, online payment, payment gateway, React, NextJS, Typescript, Tailwind CSS" />
        <meta name="author" content="Jovan Reyes" />
        <link rel="icon" href="/primepay-logo.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
