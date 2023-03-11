import Image from 'next/image';
import styles from "@/styles/components/ButtonTextAndImage.module.css"

type TypeButton = {
    text : string;
    img : string;
    imgRight : boolean;
    style ?: object
}
export default function ButtonTextAndImage({text, img, imgRight, style} : TypeButton){
    return (
       <button className={`${styles.containerButton}`} style={style}>
        {imgRight ?
            (<>
                <p className='size2'>{text}</p>
                <Image src={img} alt={''} />
            </>) 
            : (<>
                <Image src={img} alt={''} />
                <p className='size2'>{text}</p>
            </>)
        }
       </button>
    );
}