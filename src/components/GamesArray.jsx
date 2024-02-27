"use client";
import styles from "./games.module.css";
import Link from "next/link";

export let gamesArray = [
    {
        "id": 1,
        "picture_id": "data:image/jpeg;base64,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",
        "title": "Deep Rock Galactic",
        "genre": "FPS",
        "release_date": "2020-05-13",
        "description": "ROCK AND STONE ⛏️"
    },
    {
        "id": 2,
        "picture_id": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-KMxMnTFnw0bgsrJY8TATM6ukLmxsR4xpqesx9l4mA&s",
        "title": "MINECRAFT",
        "genre": "SANDBOX",
        "release_date": "2011-11-18",
        "description": "Game where players place blocks and go on adventures."
    },
    {
        "id": 3,
        "picture_id": "https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png",
        "title": "DOOM ETERNAL",
        "genre": "FPS",
        "release_date": "2020-03-20",
        "description": "Players once again take on the role of the Doom Slayer who battles the demonic forces of Hell, from a first-person perspective."
    }
]

export function GameListUpdate({id, pic_id, title, genre, release, desc}){
    let game = gamesArray.find(game => game.id === id);
    if (game) {
        game.picture_id = pic_id;
        game.release_date = release;
        game.title = title;
        game.genre = genre;
        game.description = desc;
    }
    console.log(gamesArray);
}

export default function GamesList() {
    return (
        <div className={styles.container}>
            {gamesArray.map(item => (
                <Link href={"/games/" + item.id} className={"link"}>
                <div key={item.id} className={styles.card}>
                    <img className={styles.gamePFP} src={item.picture_id} alt={item.title + " img"}/>
                    <div className={styles.textContainer}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <p className={styles.txt}>{item.genre} | {item.release_date}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}