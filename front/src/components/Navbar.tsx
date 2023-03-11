import user from "@/images/iconUser.svg";
import search from "@/images/iconSearch.svg";
import logo from "@/images/logo.png";
import Image from "next/image";
import styles from "@/styles/components/Navbar.module.css";
import Button from "./Button";
import { styleButton } from "@/utils/stylesFunction";
// import { useRouter } from "next/navigation";
import Router from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function Navbar(){
    const {t} = useTranslation('globals');
    const redirect = (login : boolean) => Router.push(`./auth/${login ? "login" : "signup"}`);
    return(
        <nav className={styles.container}>
            <div className={styles.containerMenu}>
                <div className={styles.containerLogo}>
                    <Image src={logo} alt={""}/>
                </div>
                <div className={styles.containerAuthentif}>
                    {/* <button>
                        <Image src={user} alt={""}/>
                    </button> */}
                    <div className={styles.containerAuth}>
                        <Button text={t("login")} style = {styleButton(0)} onPress={() => redirect(true) }/>
                        <Button text={t("signUp")} style = {styleButton(1)} onPress={() => redirect(false)}/>
                    </div>
                    <select name="choiceLanguage" id="choiceLanguage">
                        <option value="fr">fr</option>
                        <option value="en">en</option>
                    </select>
                </div>
            </div>
            

            <div className={styles.containerSearchBar}>
                <div className={styles.searchBar}>
                        <Image src={search} alt={""}/>
                        <input type="text" 
                            name="inputSearchBar" 
                            id="inputSearchBar" 
                            className="size2" 
                            placeholder={t("placeholderSearchBar")} />
                </div>    
            </div>
            
        </nav>
    )
}