import React from 'react'
import './HomeStyles.css'
import Hero from './components/Hero/Hero'
import Spinner from './components/Spinner/Spinner'
import ThreeTier from './components/ThreeTier/ThreeTier'
import Breaker from './components/Breaker/Breaker'
import Email from './components/Email/Email'
import ExtraPurchase from './components/ExtraPurchase/ExtraPurchase'


export default function Home() {
  return (
    <>
    <section className="">
      <Hero/>
    </section>
    <section className=''>
      <ThreeTier/>
    </section>
  
    <section className=''>
      <Breaker/>
    </section>
    <section>
      <Spinner/>
    </section>
    <section>
      <Email/>
    </section>
    <section>
      <ExtraPurchase/>
    </section>
    </>
  )
}
