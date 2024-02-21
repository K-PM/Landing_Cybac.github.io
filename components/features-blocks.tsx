import Hino from '@/public/images/Hino.jpg'
import Gine from '@/public/images/ginecolojpg.jpg'
import Gourm from '@/public/images/gourm.jpg'
import Mango from '@/public/images/mag.jpg'
import Titani from '@/public/images/titaniu.jpg'
import Pad from '@/public/images/pac.jpg'


import Image from 'next/image'
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Proyectos Realizados</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://hinochiapas.com"> <Image className="md:max-w-none mx-auto rounded" src={Hino} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <a href="https://www.amilcarbrindis.com"> <Image className="md:max-w-none mx-auto rounded" src={Gine} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://gourmand.mx"> <Image className="md:max-w-none mx-auto rounded" src={Gourm} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://www.magmar.com.mx"> <Image className="md:max-w-none mx-auto rounded" src={Mango} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <a href="https://autobusestitanium.com"> <Image className="md:max-w-none mx-auto rounded" src={Titani} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://www.padlock.mx"> <Image className="md:max-w-none mx-auto rounded" src={Pad} alt="" width={350} /></a>
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}