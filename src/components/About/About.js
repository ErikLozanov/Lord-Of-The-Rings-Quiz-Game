import { Header } from '../MainMenu/Header';
import style from './about.module.css';

export const About = () => {
    return (
        <>
        <Header />
        <div className={style.aboutPage}>
            <h1 style={{fontSize: "60px"}}>About Page</h1>
            <p style={{fontSize: "20px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad officiis esse explicabo magnam doloremque asperiores
                sed accusantium exercitationem tenetur.
            </p>
        </div>
        </>
    );
};
