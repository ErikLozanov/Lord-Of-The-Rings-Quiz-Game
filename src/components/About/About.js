import { Header } from "../MainMenu/Header";
import style from "./about.module.css";

export const About = () => {
    return (
        <>
            <Header />
            <div className={style.aboutPage}>
                <h1 style={{ fontSize: "60px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>About Page</h1>
                <div className={style.infoWindow}>
                    <h2>
                        Welcome to Middle-earth: The Ultimate Lord of the Rings
                        Fandom Hub!
                    </h2>
                    <h3>About Us</h3>
                    <p>
                        Are you ready to embark on a journey to the enchanting
                        realms of Middle-earth? Look no further! Middle-earth:
                        The Ultimate Lord of the Rings Fandom Hub is your
                        premier destination for all things Tolkien, a place
                        where fans from across the globe gather to celebrate the
                        rich and timeless world created by J.R.R. Tolkien.
                    </p>
                    <p>
                        Our Mission Our mission is simple: to provide a
                        welcoming, informative, and immersive experience for
                        fans of The Lord of the Rings and Tolkien's legendarium.
                        Whether you're a seasoned scholar of the lore or a
                        newcomer just starting your adventure, our website aims
                        to be your trusted companion.
                    </p>
                </div>
            </div>
        </>
    );
};
