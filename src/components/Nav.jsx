import Link from "next/link";
import styles from "./nav.module.css";
export default function Nav(){
    return(
        <header className={styles.header}>
            <h1 className={styles.recolor}><Link href={"/"} className={"link"}>Game Library</Link></h1>
            <nav className={styles.nav}>
                <ul className={styles.navigace_list}>
                    <li className={styles.recolor}><Link href={"/games"} className={"link"}>Games</Link></li>
                    <li className={styles.recolor}><Link href={"/"} className={"link"}>Who are we</Link></li>
                </ul>
            </nav>
        </header>
    )
}