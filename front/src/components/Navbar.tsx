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
            <ul className={styles.containerMenu}>
                <li className={styles.containerLogo}>
                    <Image src={logo} alt={""}/>
                </li>
                <li className={styles.containerAuth}>
                    {/* <button>
                        <Image src={user} alt={""}/>
                    </button> */}
                    <Button text={t("login")} style = {styleButton(0)} onPress={() => redirect(true) }/>
                    <Button text={t("signUp")} style = {styleButton(1)} onPress={() => redirect(false)}/>
                </li>
            </ul>

            <div className={styles.containerSearchBar}>
                <div className={styles.searchBar}>
                        <Image src={search} alt={""}/>
                        <input type="text" name="inputSearchBar" id="inputSearchBar" placeholder={t("placeholderSearchBar")} />
                </div>    
            </div>
            
        </nav>
    )
}