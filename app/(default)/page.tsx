export const metadata = {
  title: 'CYBAC',
  description: 'Grupo desarrollador',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero /> 
      <Testimonials />
      
      <FeaturesBlocks />
      <Newsletter />
      <Features />
      
      
      
     
      
      
      

      
    </>
  )
}