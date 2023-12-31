import styles from "./quiz.module.css"
import Button from 'react-bootstrap/Button';

import { useContext } from "react";
import { QuizContext } from "../../helpers/Contexts";
import { Link } from "react-router-dom";


import { easyMode,mediumMode, hardMode } from "../../helpers/QuestionBank";
import { Header } from "../MainMenu/Header";

export const Quiz = () => {

    const { setCurrMode} = useContext(QuizContext);

    const gamemodes = (selectedMode) => {

        if(selectedMode === 'Easy') {
            setCurrMode(easyMode);
        } else if (selectedMode === 'Medium') {
            setCurrMode(mediumMode);
        } else if (selectedMode === 'Hard') {
            setCurrMode(hardMode);
        }
    }

    return (
        <>
        <Header />

        <div className={styles.quizPage}>
        <div className={styles.startWindow}>
         <h1>Hello Adventurer!</h1>
            <p>We are glad that you are here, our Quiz has 3 modes that you can try.</p>
            <div className={styles.modes}>
            <Button as={Link} onClick={() => gamemodes('Easy')} to='/quiz/quizMode' variant="success">Easy</Button>{' '}
            <Button as={Link} onClick={() => gamemodes('Medium')} to='/quiz/quizMode' variant="warning">Medium</Button>{' '}
            <Button as={Link} onClick={() => gamemodes('Hard')} to='/quiz/quizMode' variant="danger">Hard</Button>{' '}
            </div>
        </div>
        </div>
        </>
    );
}