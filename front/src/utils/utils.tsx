import Star from "@/images/Star.svg";
import StarHalf from "@/images/StarHalf.svg";
import StarEmpty from "@/images/StarEmpty.svg"; 
import Image from "next/image";

import styles from "@/styles/utils.module.css";

export const getStar = (note : number) => {
    const noteTrunc = Math.trunc(note);
    return (
        <div className={styles.containerStars}>
            {[...Array(noteTrunc)].map((_,i) => <div key={i} className={styles.containerStar}><Image  src={Star} alt={""} /></div>)}
            {note > noteTrunc && <div className={styles.containerStar}><Image src={StarHalf} alt={""}/></div>}
            {Math.ceil(note) < 5 && [...Array(5 - Math.ceil(note))].map((_,i) => <div key={i} className={styles.containerStar}><Image src={StarEmpty} alt={""} /></div>)}
        </div>
    )
}