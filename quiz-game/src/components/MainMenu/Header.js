import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from "../MainMenu/mainMenu.module.css";

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar expand="lg" className={`${style.navBar} bg-body-tertiary nav-bar`}>
        <Container className={style.container}>
          <Navbar.Brand className={`${style.text} ${style.lotr}`}>Lord Of The Rings Quiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className={style.text} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} className={`${style.text} ${style.textQuiz}`} to='/start-quiz'>Start Quiz</Nav.Link>
              <Nav.Link as={Link} className={style.text}  to='/fun-facts'>Fun Facts</Nav.Link>
              <Nav.Link as={Link} className={style.text}  to='/about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}