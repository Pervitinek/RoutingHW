"use client";
import Nav from "@/components/Nav";
import Link from "next/link";
import {gamesArray} from "@/components/GamesArray";
import styles from "@/app/games/[id]/game.module.css";
import  {useState} from "react";
import {GameListUpdate} from "@/components/GamesArray";

export default function Edit({ params }) {
    let game = gamesArray.find(game => String(game.id) === params.id);

    const [title, setTitle] = useState(game.title);
    const [genre, setGenre] = useState(game.genre);
    const [release, setDate] = useState(game.release_date);
    const [pic_id, setImg] = useState(game.picture_id);
    const [desc, setDesc] = useState(game.description);

    let id = game.id;

    return (
        <>
            <Nav/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <input className={styles.input}  placeholder={"Picture URL"} onChange={(e) =>{
                        if(e.target.value !== undefined) {
                            setImg(e.target.value);
                        }
                    }}/>
                    <h2 className={styles.gameTitle}><input className={styles.input} defaultValue={game.title} placeholder={"Game Name"} onChange={(e) =>{
                        if(e.target.value !== undefined) {
                            setTitle(e.target.value);
                        }
                    }}/></h2>
                    <p className={styles.gameReleaseDate}><input className={styles.input} defaultValue={game.release_date} placeholder={"Release date"} onChange={(e) =>{
                        if(e.target.value !== undefined) {
                            setDate(e.target.value);
                        }
                    }}/></p>
                    <p><span className={styles.podnadpisHry}>Genre:</span><br/> <input className={styles.input} defaultValue={game.genre} placeholder={"Game genre"} onChange={(e) =>{
                        if(e.target.value !== undefined) {
                            setGenre(e.target.value);
                        }
                    }}/></p>
                    <p><span className={styles.podnadpisHry}>Description:</span><br/><input className={styles.input} defaultValue={game.description} placeholder={"Game description"} onChange={(e) =>{
                        if(e.target.value !== undefined) {
                            setDesc(e.target.value);
                        }
                    }}/></p>
                    <Link href={"/games/"+game.id} className={"link"}><button className={styles.button} onClick={() => GameListUpdate({id, pic_id, title, genre, release, desc})}>Confirm changes</button></Link>
                </div>
            </main>
        </>
    )
}