import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const myProjectsPage = () => {
    return (

        <div className={styles.container}>
          <Navbar />
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <main>
            <h1 className={styles.title}>
              My Projects
            </h1>

            <p className={styles.description}>
              Browse my biggest projects to date!
            </p>
            
          </main>

          <footer>
            <Link
              passHref="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <Image src="/vercel.svg" alt="Vercel" className={styles.logo} />
            </Link>
          </footer>
      </div>
)};

export default myProjectsPage();