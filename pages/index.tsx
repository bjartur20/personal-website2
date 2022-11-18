import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bjartur Þórhallsson</title>
        <meta name="description" content="Created using NextJS13" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome, I'm Bjartur Þórhallsson</h1>

        <div>
          <p className={styles.description}>My experiance</p>

          <div className={styles.grid}>
            <a href="https://controlant.com/" className={styles.card}>
              <h2>Controlant &rarr;</h2>
              <p>January 2022 - </p>
              <p>Quality Assurance Engineer</p>
            </a>

            <a href="https://en.ru.is/" className={styles.card}>
              <h2>Reykjavík University &rarr;</h2>
              <p>August 2019 - May 2022</p>
              <p>BSc in Software Engineering.</p>
              <p>TA for Data Structures and Sofware Architecture courses.</p>
            </a>

            <a href="https://www.bdc.is/" className={styles.card}>
              <h2>Borealis Data Center &rarr;</h2>
              <p>June 2020 - January 2022</p>
              <p>Programmer</p>
            </a>
          </div>
        </div>

        <div>
          <p className={styles.description}>Feel free to contact me</p>

          <div className={styles.grid}>
            <a
              href="https://www.linkedin.com/in/bjartur-%C3%BE-99ab9313b/"
              className={styles.card}
            >
              <h2>Linkedin &rarr;</h2>
            </a>

            <a href="https://github.com/bjartur20" className={styles.card}>
              <h2>GitHub &rarr;</h2>
            </a>

            <a href="mailto:bjartur20@gmail.com" className={styles.card}>
              <h2>Email &rarr;</h2>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
