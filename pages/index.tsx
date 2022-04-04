import { NextSeo } from 'next-seo'
import Head from 'next/head'

import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
function Home() {
  const MapWithNoSSR = dynamic(() => import('../components/map'), { ssr: false })
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='Adăposturi de protecție civilă - Citizen Next'
        description='Harta adăposturilor de protecție civilă din România. Dezvoltat de Citizen Next.'
        canonical='https://adaposturi.citizennext.ro/'
        openGraph={{
          url: 'https://adaposturi.citizennext.ro/',
          title: 'Adăposturi de protecție civilă - Citizen Next',
          description: 'Harta adăposturilor de protecție civilă din România. Dezvoltat de Citizen Next.',
          images: [
            {
              url: 'https://adaposturi.citizennext.ro/images/og-adaposturi.png',
              width: 1300,
              height: 1041,
              alt: 'Adăposturi de protecție civilă - Citizen Next',
            },
          ],
        }}
      />
      <main>
        <MapWithNoSSR />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
