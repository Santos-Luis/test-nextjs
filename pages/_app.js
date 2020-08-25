import '../styles/global.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My new cool app</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}