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

        <div className={styles.container}>
          <h1>Matrices del apartado Códigos Binarios de Hamming</h1>
          <h3>Matriz 1</h3>
          <p> 
&#8726;begin&#x2774;center&#x2775;
<br />$
<br />H=
<br />&#8726;left(&#8726;begin&#x2774;array&#x2775;&#x2774;ccc&#x2775;
  <br />    0 & 1 & 1 \\
  <br />   1 & 0 & 1 
  <br />&#8726;end&#x2774;array&#x2775; &#8726;right)
  <br />$
  <br />&#8726;end&#x2774;center&#x2775;

          </p>
          <h3>Matriz 2</h3>
          <p> 
\begin&#x2774;center&#x2775;
<br />$
<br />H=
<br />\left(\begin&#x2774;array&#x2775;&#x2774;ccccccc&#x2775;
  <br />   0 & 0 & 0 & 1 & 1 & 1 & 1 \\
  <br />   0 & 1 & 1 & 0 & 0 & 1 & 1 \\
  <br />   1 & 0 & 1 & 0 & 1 & 0 & 1 
  <br />\end&#x2774;array&#x2775; \right)
  <br />$
  <br />\end&#x2774;center&#x2775;
          </p>
          <h3>Matriz 3</h3>
          <p> 
\begin&#x2774;center&#x2775;
<br />$
<br />H=
<br />\left(\begin&#x2774;array&#x2775;&#x2774;ccccccc&#x2775;
  <br />    0 & 1 & 1 & 1 & 1 & 0 & 0 \\
  <br />    1 & 0 & 1 & 1 & 0 & 1 & 0 \\
  <br />   1 & 1 & 0 & 1 & 0 & 0 & 1 
  <br />\end&#x2774;array&#x2775; \right)
  <br />$
  <br />\end&#x2774;center&#x2775;           
          </p>
          <h3>Matriz 4</h3>
          <p> 
          \begin&#x2774;center&#x2775;
          <br />$
          <br />H=
          <br />\left(\begin&#x2774;array&#x2775;&#x2774;ccccccc&#x2775;
            <br />   1 & 0 & 0 & 0 & 0 & 1 & 1 \\
            <br />   0 & 1 & 0 & 0 & 1 & 0 & 1 \\
            <br />   0 & 0 & 1 & 0 & 1 & 1 & 0 \\
            <br />   0 & 0 & 0 & 1 & 1 & 1 & 1
            <br />\end&#x2774;array&#x2775; \right)
            <br />$
            <br />\end&#x2774;center&#x2775;       
          </p>

          <h1>Matrices del apartado de Decodificación</h1>
          <p>
          <h3>Matriz 1</h3>
          \begin&#x2774;center&#x2775;
          <br />$
          <br />H=
          <br />\left(\begin&#x2774;array&#x2775;&#x2774;cccc&#x2775;
            <br />   1 & 0 & 1 & 2 \\
            <br />  0 & 1 & 1 & 1 
            <br />\end&#x2774;array&#x2775; \right)
            <br />$
            <br />\end&#x2774;center&#x2775;
          </p>
          <p>
          <h3>Matriz 2</h3>
          \begin&#x2774;center&#x2775;
          <br />$
          <br />\left(\begin&#x2774;array&#x2775;&#x2774;cccc&#x2775;
            <br />  1 & 0 & 1 & 2 \\
            <br />  0 & 1 & 1 & 1
            <br />\end&#x2774;array&#x2775; \right)
            <br />$
            <br />$
            <br />\left(\begin&#x2774;array&#x2775;&#x2774;c&#x2775;
              <br />   1 \\
              <br />  2 \\
              <br />  1 \\
              <br />  2
              <br />\end&#x2774;array&#x2775; \right)
              <br />$
              <br />=
              <br />$
              <br />\left(\begin&#x2774;array&#x2775;&#x2774;c&#x2775;
                <br />   0 \\
                <br />   2
                <br />\end&#x2774;array&#x2775; \right)
                <br />$
                <br />=
                <br />$
                <br />2
                <br />\left(\begin&#x2774;array&#x2775;&#x2774;c&#x2775;
                  <br />   0 \\
                  <br />   1
                  <br />\end&#x2774;array&#x2775; \right)
                  <br />$
                  <br />\end&#x2774;center&#x2775;
          </p>
          <h1>Matrices del apartado de Códigos de Golay Binariosy Ternarios</h1>
          <p>
          \begin&#x2774;center&#x2775;
          <br />$
          <br />G<sub>24</sub>=
          <br />\left(\begin&#x2774;array&#x2775;&#x2774;cccccccccccc&#x2775;
            <br />   0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
            <br />  1 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 \\
            <br />  1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 \\
            <br />  1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 \\
            <br /> 1 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 0 \\
            <br /> 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 \\
            <br />  1 & 1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 \\
            <br /> 1 & 0 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 \\
            <br />   1 & 0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 \\
            <br />  1 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 \\
            <br /> 1 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 \\
            <br /> 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 \\
            <br />\end&#x2774;array&#x2775; \right)
            <br />$
            <br />\end&#x2774;center&#x2775;
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
