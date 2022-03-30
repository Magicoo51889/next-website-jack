import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Gist from 'react-gist';

const myProjectsPage = () => {
    return (
      
        <div className={styles.container}>
          <Navbar />
          <Head>
            <title>My Projects</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <main>
            <h1 className={styles.title}>
              My <a href="https://github.com/Magicoo51889">Projects</a>
            </h1>

            <p className={styles.description}>
              Browse my biggest projects to date!
            </p>

            <p>
              <Gist id="7b0517189a639622de2e2de1e2ff9daa18a7b94a" />
              <h2>My website</h2>
            </p>

            <p>
              <Gist id="46575989e0435c65d65df943780a1493da6e51b9" />
              <h2>My OS through Nand to Tetris</h2>
            </p>
            
            <p>
              <Gist id="a573a7fd9c7401ff158faa34089f4e30a3295655" />
              <h2>My Discord bot, being made using typescript</h2>
            </p>

            <p>
              <Gist id="260f1cba9dabf3534ef79671e2d95ba17a6b0794" />
              <h2>A tool to make patterns using P5.js</h2>
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

export default myProjectsPage;