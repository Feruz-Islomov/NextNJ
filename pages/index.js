import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animal List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Ullamco occaecat voluptate aliquip non commodo id id cillum minim. Sit
          laborum tempor ea esse esse excepteur cillum est adipisicing occaecat.
          Magna tempor ut voluptate duis labore nisi et exercitation fugiat
          fugiat. In et tempor minim enim. Esse mollit irure proident
          exercitation cillum aliqua enim do ex dolore anim velit id ullamco.
          Reprehenderit consequat incididunt tempor cupidatat dolore. Veniam
          irure voluptate ad commodo proident ex culpa labore Lorem ut fugiat
          dolore ut proident. Ipsum enim in pariatur velit.
        </p>
        <p className={styles.text}>
          Ullamco occaecat voluptate aliquip non commodo id id cillum minim. Sit
          laborum tempor ea esse esse excepteur cillum est adipisicing occaecat.
          Magna tempor ut voluptate duis labore nisi et exercitation fugiat
          fugiat. In et tempor minim enim. Esse mollit irure proident
          exercitation cillum aliqua enim do ex dolore anim velit id ullamco.
          Reprehenderit consequat incididunt tempor cupidatat dolore. Veniam
          irure voluptate ad commodo proident ex culpa labore Lorem ut fugiat
          dolore ut proident. Ipsum enim in pariatur velit.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See animal list</a>
        </Link>
      </div>
    </>
  );
}
