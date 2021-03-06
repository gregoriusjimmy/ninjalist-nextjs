import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Tempor et dolor consequat irure incididunt labore qui anim sunt do ex. Excepteur mollit
          velit consectetur ad aliquip nulla voluptate duis anim reprehenderit enim. Dolor ipsum ad
          laborum amet ea quis eu occaecat labore consequat ad. Aliqua magna minim labore et
          excepteur eiusmod et aliquip pariatur deserunt irure reprehenderit. Nulla consequat non
          amet tempor mollit et do. Do eiusmod non excepteur ea. Magna commodo culpa et qui ut
          laboris amet adipisicing cillum laboris.{' '}
        </p>
        <p className={styles.text}>
          Tempor et dolor consequat irure incididunt labore qui anim sunt do ex. Excepteur mollit
          velit consectetur ad aliquip nulla voluptate duis anim reprehenderit enim. Dolor ipsum ad
          laborum amet ea quis eu occaecat labore consequat ad. Aliqua magna minim labore et
          excepteur eiusmod et aliquip pariatur deserunt irure reprehenderit. Nulla consequat non
          amet tempor mollit et do. Do eiusmod non excepteur ea. Magna commodo culpa et qui ut
          laboris amet adipisicing cillum laboris.{' '}
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
