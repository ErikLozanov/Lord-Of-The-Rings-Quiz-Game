import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from "../MainMenu/mainMenu.module.css";

export const Header = () => {
    return (
        <Navbar expand="lg" className={`${style.navBar} bg-body-tertiary nav-bar`}>
        <Container>
          <Navbar.Brand className={style.text} href="#home">Lord Of The Rings Quiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={style.text} href="#home">Home</Nav.Link>
              <Nav.Link className={style.text}  href="#link">Start Quiz</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}