import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import ReactEmbedGist from 'react-embed-gist';

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
              <ReactEmbedGist gist="Magicoo51889/next-website-jack" />
              <h2>My website</h2>
            </p>

            <p>
              <ReactEmbedGist gist='Magicoo51889/Nand-2-Tetris' />
              <h2>My OS through Nand to Tetris</h2>
            </p>
            
            <p>
              <ReactEmbedGist gist='Magicoo51889/TS-OTHER-BOT' />
              <h2>My Discord bot, being made using typescript</h2>
            </p>

            <p>
              <ReactEmbedGist gist='Magicoo51889/P5.js-drawing-tool' />
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

export default myProjectsPage();