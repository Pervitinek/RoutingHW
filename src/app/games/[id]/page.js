"use client";
import Link from "next/link";
import {gamesArray} from "@/components/GamesArray";
import Nav from "@/components/Nav";
import styles from "./game.module.css";

export default function Game({ params }) {

    let game = gamesArray.find(game => String(game.id) === params.id);

    if (!game || !params.id) {
        return (
            <div className={"errorDiv"}>
                <h2 className={"errorFourOFour"}>
                    Error 404
                </h2>
                <p>
                    Click the highlighted text to go back to the <Link href={"/"} className={"link"}><span className={"errorMainPart"}>main page</span></Link>
                </p>
            </div>
        )
    }
    return (
        <>
            <Nav classname={styles.nav}/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <img src={game.picture_id} alt={game.title + " image"}/>
                    <h2 className={styles.gameTitle}>{game.title}</h2>
                    <p className={styles.gameReleaseDate}>{game.release_date}</p>
                    <p><span className={styles.podnadpisHry}>Genre:</span><br/> {game.genre}</p>
                    <p><span className={styles.podnadpisHry}>Description:</span><br/>{game.description}</p>
                    <Link href={"/games/"+game.id+"/edit"} className={"link"}><button className={styles.button}>Edit the info</button></Link>
                </div>
            </main>
        </>
    );
}