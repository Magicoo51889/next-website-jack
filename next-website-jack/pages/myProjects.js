import Link from 'next/link'
import Head from 'next/head'

export default function myProjectsPage({ Component, pageProps}) {
    return (
        <div className="container">
      
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <h1 className="title">
              My Projects
            </h1>

            <p className="description">
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
              <img src="/vercel.svg" alt="Vercel" className="logo" />
            </a>
          </footer>
      </div>
)};