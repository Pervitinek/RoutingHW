import Nav from "@/components/Nav";
import GamesList from "@/components/GamesArray";
import styles from "./gameList.module.css";
export default function Games() {
    return (
        <>
            <Nav/>
            <main className={styles.main}>
                <GamesList/>
            </main>
        </>
    )
}