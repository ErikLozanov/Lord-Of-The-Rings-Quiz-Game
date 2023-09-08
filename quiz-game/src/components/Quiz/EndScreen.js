import Button from 'react-bootstrap/Button';

import style from "./quiz.module.css";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import { QuizContext } from "../../helpers/Contexts";
import { easyMode } from "../../helpers/QuestionBank";

export const EndScreen = () => {

    const {score , setScore} = useContext(QuizContext);

    return (
        <div className={style.quizPage}>
            
        <div className={style.startWindow}>
            <h1>Your result is:</h1>
            <h3> {score} / {easyMode.length}</h3>
            <div className={style.buttons}>
            <Button as={Link} onClick={() => setScore(0)} to='/quiz/easy-mode' variant="dark">Try Again</Button>
            <Button as={Link} onClick={() => setScore(0)} to='/start-quiz/' variant="dark">Choose a different mode</Button>
            <Button as={Link} onClick={() => setScore(0)} to='/' variant="dark">Return to Home Page</Button>
            </div>
        </div>
        </div>
    );
}