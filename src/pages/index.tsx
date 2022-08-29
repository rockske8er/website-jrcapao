import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <main className={'font-poppins w-full'}>
      <Header />
      <Hero />
    </main>
  )
}

export default Home
