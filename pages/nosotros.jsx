import React, {Component} from 'react';
import Link from 'next/link'
import Head from "next/head";
import Header from "../components/Header";

class Nosotros extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Blog | {process.env.SITE_NAME}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Nosostros</h1>
                <Link href="/">Home</Link>
            </div>
        );
    }
}

export default Nosotros;
