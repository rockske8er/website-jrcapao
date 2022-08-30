import type { NextPage } from 'next'
import { About } from '../components/About'
import { CallToAction } from '../components/CallToAction'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <main className={'font-poppins w-full'}>
      <Header />
      <Hero />
      <About />
      <CallToAction />
    </main>
  )
}

export default Home
