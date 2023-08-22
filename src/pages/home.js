import '../styles/home.css'
import React from 'react'
import Hero from '../components/home/hero'
import LatestResearch from '../components/home/latestResearch'
import SubscribeCTA from '../components/home/subscribeCTA'
import Testimonial from '../components/home/testimonial/testimonial'
import Footer from '../components/footer/footer'
import useFetch from '../hooks/useFetch'
import { useContext } from 'react'
import { StateContext } from '../store/index'
import Loading from './loading'
import ReqError from './error'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  const host = process.env.REACT_APP_API_URL
  const { loading, error } = useFetch(
    `${host}/api/home?populate[blogs][populate][1]=main_image`,
    'SET_HOME'
  )
  const [state] = useContext(StateContext)
  if (error) return <ReqError props={error} />
  if (loading) return <Loading />
  if (!state.home.data) return <Loading />
  if (!state.home.data.attributes) return <Loading />

  return (
    <div className="home">
      <Helmet>
        <title>Ali Alsyouf</title>
        <meta
          name="description"
          content="Exploring the Fascinating World of Chemistry Welcome to My Journey Through Molecules and Reactions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Exploring the Fascinating World of Chemistry Welcome to My Journey Through Molecules and Reactions."
        />
        <meta property="og:url" content="https://alialsyoufchemist.com/" />
        <meta
          property="og:title"
          content="Ali Alsyouf - Research And Development Chemist"
        />
        <meta
          property="og:description"
          content="Exploring the Fascinating World of Chemistry Welcome to My Journey Through Molecules and Reactions."
          data-rh="true"
        />
        <meta
          property="og:image"
          content="https://alialsyoufchemist.com/android-chrome-512x512.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alialsyoufchemist.com/" />
        <meta
          property="twitter:title"
          content="Ali Alsyouf - Research And Development Chemist"
        />
        <meta
          property="twitter:description"
          content="Exploring the Fascinating World of Chemistry Welcome to My Journey Through Molecules and Reactions."
          data-rh="true"
        />
        <meta
          property="twitter:image"
          content="https://alialsyoufchemist.com/android-chrome-512x512.png"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero data={state.home.data.attributes} />
      <LatestResearch data={state.home.data.attributes} />
      <SubscribeCTA data={state.home.data.attributes} />
      <Testimonial data={state.home.data.attributes} />
      <Footer />
    </div>
  )
}
