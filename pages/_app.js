import '../styles/globals.css'
import '../styles/styles.scss'
import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header/>
          <Component {...pageProps}/>
          <Footer/>
      </>
  )
}

export default MyApp
