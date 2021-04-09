import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://codigoshamming.vercel.app/">Matrices H</a>
        </h1>

        <div className={styles.grid}>
          <h3>Matriz 1</h3>
          <p> 
          <img src="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/170866593_5325986557475136_8186343361143095438_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=nxiB0f-MaYcAX96204D&_nc_ht=scontent.ftgu1-2.fna&oh=06787069a6b5c2d85923db17eb42c5f6&oe=60965206" alt="M1" width={500} height={500} />
          </p>
          <h3>Matriz 2</h3>
          <p> 
            
          </p>
          <h3>Matriz 3</h3>
          <p> 
            
          </p>
          <h3>Matriz 4</h3>
          <p> 
            
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
