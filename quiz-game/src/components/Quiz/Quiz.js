import styles from "./quiz.module.css"
import Button from 'react-bootstrap/Button';


import { Link } from "react-router-dom";

export const Quiz = () => {


    return (
        <div className={styles.quizPage}>
        <div className={styles.startWindow}>
         <h1>Hello Adventurer!</h1>
            <p>We are glad that you are here, our Quiz has 3 modes that you can try.</p>
            <div className={styles.modes}>
            <Button as={Link} to='/quiz/easy-mode' variant="success">Easy</Button>{' '}
            <Button as={Link} to='/quiz/medium-mode' variant="warning">Medium</Button>{' '}
            <Button as={Link} to='/quiz/hard-mode' variant="danger">Hard</Button>{' '}
            </div>
        </div>
        </div>
    );
}