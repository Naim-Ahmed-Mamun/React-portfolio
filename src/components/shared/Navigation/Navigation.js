import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

   // sticky state
   const [sticky, setSticky] = useState(false);
   const stickyNavbar = () => {
      if (window.scrollY > 50) {
         setSticky(true)
      }
      else {
         setSticky(false)
      }
   }
   window.addEventListener('scroll', stickyNavbar);

   return (
      <>
         <Navbar className={sticky ? 'sticky nav_container' : 'nav_container'}
            collapseOnSelect expand="lg" variant="dark">
            <Container>
               <a href="#home" className="logo"><strong>Naim.</strong></a>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link className="nav_link" href="#home">Home</Nav.Link>
                     <Nav.Link className="nav_link" href="#about">About</Nav.Link>
                     <Nav.Link className="nav_link" href="#portfolio">Portfolio</Nav.Link>
                     <Nav.Link className="nav_link" href="#blog">Blog</Nav.Link>
                     <Nav.Link className="nav_link" href="#contact">Contact</Nav.Link>
                     <a className="nav_resume_btn" href="https://drive.google.com/file/d/1Hr-jqOq0DJP_2oq9CLaO8tHoijmob_du/view?usp=sharing"
                     target="_blank" rel="noreferrer"> Download Resume</a>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;