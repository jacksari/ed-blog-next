import React, {Component} from 'react';
import Head from "next/head";

class Contacto extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Contact | {process.env.SITE_NAME}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h2>Contacto aquí</h2>
            </div>
        );
    }
}

export default Contacto;
