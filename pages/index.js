import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import fetch from 'node-fetch';
import Post from "../components/Post";
export async function getStaticProps(){
    const resp = await fetch(`${process.env.API_BLOG}/posts`);
    const posts = await resp.json();
    return {
        props: {
            posts
        }
    }
}

export default function Home({posts}) {
    //console.log('posts', posts);
  return (
    <div>
      <Head>
        <title>Home | {process.env.SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            <h1>Bienvenidos al Curso de Next</h1>
            <span>Aprendiendo Next</span>
            <div>
                {
                    posts.map(p => <Post post={p} key={p.id}/>)
                }
            </div>
        </main>


    </div>
  )
}
