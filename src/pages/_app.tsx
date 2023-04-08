import type { AppProps } from 'next/app'

import '@/styles/tw-output.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';

import '@/styles/components/About.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
