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
          <iframe src="https://onedrive.live.com/embed?cid=91F69582752FB659&resid=91F69582752FB659%21119&authkey=AFyo8TsAa5B5_Vo" width="98" height="120" frameborder="0" scrolling="no"></iframe>
          <Image src="https://1drv.ms/u/s!Alm2L3WClfaRd_4Unk_Oj2kb9aM?e=Glege3" alt="Matriz 1" width={500} height={500} />
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
