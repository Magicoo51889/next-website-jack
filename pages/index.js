import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
      <div className={styles.container}>
        <Navbar/>
        <script src="./components/index.js" defer></script>
        <Head>
          <title>Jack Foot</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="">JackFoot!</a>
          </h1>

          <p className={styles.description}>
            This is my personal website, displaying what I've done!
          </p>

          <div className={styles.grid}>
            <a href="https://github.com/Magicoo51889" className={styles.card}>
              <h2>Github &rarr;</h2>
              <p>A link straight to my Github so you can browse the code I've produced!</p>
            </a>

            <a href="https://bit.ly/3iIzhqs" className={styles.card}>
              <h2>My CV &rarr;</h2>
              <p>My CV showing what I've done and my workplace skills.</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jack-foot-b46175214/"
              className={styles.card}
            >
              <h2>My LinkedIn &rarr;</h2>
              <p>See my LinkedIn account to see my expereince and skills.</p>
            </a>

            <Link
              passHref="/myProjects"
              className={styles.card}
            >
              <h2>My Main Projects &rarr;</h2>
              <p>
              This is a collection of my largest projects to date!
              </p>
            </Link>
          </div>
        </main>
        
        <footer className={styles.footer}>
          <Link
            passHref="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </Link>
        </footer>
      </div>
  )
}

export default Home;