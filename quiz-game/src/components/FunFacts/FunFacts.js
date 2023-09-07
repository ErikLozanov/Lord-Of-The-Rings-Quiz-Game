import { Header } from "../MainMenu/Header";
import styles from "./funFacts.module.css"

export const FunFacts = () => {
     
    return (
        <>
                <Header />
        <div className={styles.funFactPage}>
            <h1 style={{fontSize: "60px"}}>Fun Facts</h1>
            <p style={{fontSize: "20px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad officiis esse explicabo magnam doloremque asperiores
                sed accusantium exercitationem tenetur.
            </p>
        </div>
        </>
    );
}