import Navbar from "@/components/Navbar";
import Star from "@/images/Star.svg";
import StarHalf from "@/images/StarHalf.svg";
import StarEmpty from "@/images/StarEmpty.svg"; 
import lasagne from "@/images/lasagne.jpg";
import Image from "next/image";
import { getStar } from "@/utils/utils";
import styles from "@/styles/recipes/filActu.module.css";
import PreviewRecipe from "@/components/PreviewRecipe";

export default function filActualite() {
    type TypeRecipe = {
        name : string;
        notes : number;
        nbrAvis : number;
        img : string;
    }
    const recipes : TypeRecipe[] = [
        {
            name : "Lasagne",
            notes : 4,
            nbrAvis : 1056,
            img : Star
        },
        {
            name : "Lasagne",
            notes : 4.2,
            nbrAvis : 400,
            img : Star
        },
        {
            name : "Lasagne",
            notes : 2.1,
            nbrAvis : 3007,
            img : Star
        },
        {
            name : "Lasagne",
            notes : 2.1,
            nbrAvis : 3007,
            img : Star
        },
    ]

    
    return (
        <div className={styles.containerFilActu}>
            <Navbar/>
            <div className={styles.ficheRecipe}>
                {recipes.map((elt, i) => <PreviewRecipe key={i} recipes={elt} />)}
            </div>
        </div>
    )
}

