import Post from "../components/Post";
import {NextSeo} from 'next-seo';

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
        <NextSeo
            title="Bienvenido a EDblog"
            description="EDblog es una creación de Curso Next"
            openGraph={{
                url: 'https://jacksari.com',
                title: 'Bienvenido a EDblog',
                description: 'Este es un ejemplo del curso Next',
                images: [{
                    url: 'https://icons-for-free.com/iconfiles/png/512/logo+react+react+js+icon-1320184811840217251.png',
                    width: 1280,
                    height: 720,
                    alt: 'Foto de perfil React'
                }],
                site_name: 'EDblog'
            }}
            twitter={{
                handle: '@jacksari',
                site: '@jacksari',
                cardType: 'summary_large_image'
            }}
        />
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
