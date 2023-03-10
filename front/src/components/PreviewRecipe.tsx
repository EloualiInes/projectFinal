import styles from "@/styles/components/PreviewRecipe.module.css";
import lasagne from "@/images/lasagne.jpg";
import Image from "next/image";
import { getStar } from "@/utils/utils";

type TypeRecipe = {
    name : string;
    notes : number;
    nbrAvis : number;
    img : string;
}

export default function PreviewRecipe({recipes} : {recipes : TypeRecipe}) {
    return (
        <div className={styles.containerRecipe}>
            <div className={styles.avisUsers}>
                <div className={styles.containerImgPrincipal}>
                    <Image src={lasagne}alt={""}/>
                </div>
                <div className={styles.containerInfosNotes}>
                    <div className={styles.containerNotes}>
                        {getStar(recipes.notes)}
                         <p>{recipes.notes}/5</p>
                    </div>
                    <p>({recipes.nbrAvis} avis)</p> 
                </div>
                                    
            </div>
            <h2>{recipes.name}</h2>
        </div>
    )

}