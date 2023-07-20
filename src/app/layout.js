"use client";
import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import 'wowjs/css/libs/animate.css'; // Import the Wow.js CSS
import './wow-init'; // Import the wow-init.js file



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'home',
  description: 'generatore for quotes',
}



export default function RootLayout({ children }) {

  useEffect(() => {
    // Call the Wow.js initialization code when the component mounts
    const WOW = require('wowjs');
    const wow = new WOW.WOW();
    wow.init();
  }, []);


  return (
    <html lang="en">
    <Head>
        <title>My Proyect</title>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/> */}
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
