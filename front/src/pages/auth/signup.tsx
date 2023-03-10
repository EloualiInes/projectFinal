import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/images/logo.png";
import Image from "next/image";
import styles from "@/styles/auth/signup.module.css";
import useTranslation from 'next-translate/useTranslation';

export default function Signup({...props}) {
    const {t} = useTranslation('signup');
    return(
        <div className={styles.containerSignUp}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLogo}>
                    <Link href="/" className={styles.containerLogo}>
                        <Image src={logo} alt={""}/>
                    </Link>
                </div>
                <div className={styles.contentFormulaire}>
                    <div>
                        <h1>{t("title")}</h1>
                        <h2>{t("subtitle")}</h2>
                    </div>
                    
                    <form action="" method="post">
                        <div className={styles.containerInput}>
                            <label htmlFor="email">{t("email")}</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div className={styles.containerInput}>
                            <label htmlFor="pseudo">{t("pseudo")}</label>
                            <input type="pseudo" name="pseudo" id="pseudo" />
                        </div> 

                        <div className={styles.containerInput}>
                            <label htmlFor="password">{t("password")}</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <div className={styles.containerInput}>
                            <input type="submit" value={t("buttonSignUp")} />
                        </div>

                    </form>
                    <p>
                    {t("textRedirection")} <Link href="./login">{t("redirection")}</Link>
                    </p> 
           
                </div>
               
            </div>

            <div className={styles.containerRight}></div>
            
        </div>
    )
}