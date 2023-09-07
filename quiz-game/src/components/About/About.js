import { Header } from '../MainMenu/Header';
import style from './about.module.css';

export const About = () => {
    return (
        <>
        <Header />
        <div className={style.aboutPage}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt ad officiis esse explicabo magnam doloremque asperiores
                sed accusantium exercitationem tenetur.
            </p>
        </div>
        </>
    );
};
