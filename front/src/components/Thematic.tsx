import styles from "@/styles/components/Thematic.module.css"
import Image, { StaticImageData } from "next/image"


export default function Thematic({name, img }: {name : string, img : StaticImageData}) {
    return (

        <button className={styles.thematic}>
            <div className={styles.containerImg}>
                <Image src={img} alt={""}/>
            </div>
            <p className="size3">{name}</p>
        </button>
    )
}