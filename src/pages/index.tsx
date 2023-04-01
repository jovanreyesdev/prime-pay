import Head from 'next/head';
import NavigationBar from '@/components/NavigationBar';
import Header from '@/components/Header';
import Steps from '@/components/Steps';
import About from '@/components/About';
import Footer from '@/components/Footer';

function Home() {
  return (
    <>
      <Head>
        <title>PrimePay</title>
      </Head>
      <NavigationBar />
      <main className="lg:pb-20">
        <Header />
        <Steps />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default Home;