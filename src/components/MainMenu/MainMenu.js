import { ControlledCarousel } from "./ControlledCarousel";
import { Header } from "./Header";
import styles from "./mainMenu.module.css";
export const MainMenu = () => {



    return (
        <>
        <Header />
        <center><h1 className={styles.welcomeText}>Welcome to Lord Of The Rings Quiz!</h1></center>
        <ControlledCarousel />
        </>
  );
}