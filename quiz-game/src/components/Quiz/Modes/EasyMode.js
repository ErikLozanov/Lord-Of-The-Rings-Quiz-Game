import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import styles from "../quiz.module.css"
import { easyMode } from "../../../helpers/QuestionBank";

import { QuizContext } from "../../../helpers/Contexts";
import { Link} from "react-router-dom";

export const EasyMode = () => {

    const {score, setScore, setGameState } = useContext(QuizContext)
    const [currQuestion,setCurrQuestion] = useState(0);
    const [chosenOption, setChosenOption] = useState('');

    const nextQuestion = () => {
        if(easyMode[currQuestion].answer === chosenOption) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion+1);
    };

    const finishQuiz = () => {
        if(easyMode[currQuestion].answer === chosenOption) {
            setScore(score + 1);
        }
    }

    return (
        <div className={styles.easyMode}>
            <div className={styles.easyModeWindow}>
        <h1>{easyMode[currQuestion].prompt}</h1>
            <div className="options">
                
            <Button className={styles.btn} onClick={() => setChosenOption('A')} variant="secondary">{easyMode[currQuestion].optionA}</Button>{' '}
            <Button className={styles.btn} onClick={() => setChosenOption('B')} variant="secondary">{easyMode[currQuestion].optionB}</Button>{' '}
            <Button className={styles.btn} onClick={() => setChosenOption('C')} variant="secondary">{easyMode[currQuestion].optionC}</Button>{' '}
            <Button className={styles.btn} onClick={() => setChosenOption('D')} variant="secondary">{easyMode[currQuestion].optionD}</Button>{' '}
            </div>

            {currQuestion === easyMode.length - 1 ? 
            <Button as={Link} to={'/quiz/end-screen'} onClick={finishQuiz} variant="success">Finish Quiz</Button>
            :
            <Button onClick={nextQuestion} variant="success">Next Question</Button>
        }
            </div>
            {/* <Image className={styles.easyModeWindow} src={easyMode[currQuestion].imageUrl} fluid />; */}
        </div>
    );
}