import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Link from "next/link";


export default function Home() {
  return (
      <>
        <Nav/>
        <main className={styles.main}>
          <div className={styles.background}>
            <h2>Who are we?</h2>
            <p>We are a small library of good games you can play when you are bored, or something.</p>
            <div className={styles.buttonCenter}>
                <Link href={"/games"} className={"link"}><button className={styles.button}>Click me to try our BIG library!</button></Link>
            </div>
          </div>
        </main>
      </>
  );
}