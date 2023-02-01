import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import style from "@/styles/styleHome.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Hello everybody!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <h1 className={style.title}>H O M E</h1>
        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>
    </>
  );
}
