import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';

export default function myProjectsPage() {
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
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
            </a>
          </footer>
      </div>
)};