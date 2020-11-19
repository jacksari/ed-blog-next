import React, {Component} from 'react';
import Link from 'next/link'
import Head from "next/head";
import fetch from 'node-fetch';
import Coments from "../../components/Coments";


const PostBlog = ({post}) => (
    <div>
        <Head>
            <title>Post {post.id} | {process.env.SITE_NAME}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <h2>Hola</h2>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <Coments id={post.id}/>
        </main>

    </div>
);

PostBlog.getInitialProps = async function(context){
    const { id } = context.query;
    //console.log('id', id);
    const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`);
    const post = await resp.json();
    //console.log('post', post)
    return {
        post
    }
}

export default PostBlog;
