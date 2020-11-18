import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <h1>Bienvenidos al Curso de Next</h1>
            <span>Aprendiendo Next</span>
            <span>{process.env.API_BLOG}</span>
            <Link href="/nosotros">Nosotros</Link>
        </main>


    </div>
  )
}
