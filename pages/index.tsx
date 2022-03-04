import Head from 'next/head'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
function Home() {
  const MapWithNoSSR = dynamic(() => import('../components/map'), { ssr: false })
  return (
    <div>
      <Head>
        <title>Adăposturi de protecție civilă - Citizen Next</title>
        <meta name='description' content='Harta adăposturilor de protecție civilă din România. Dezvoltat de Citizen Next.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <MapWithNoSSR />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
