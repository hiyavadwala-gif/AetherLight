import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/hero.png"
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Navebar_one() {
    return (
      
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        {/* <Image src={logo} width={90} /> */}

                        <Navbar href="#Navbar"><Link to="/">Navbar</Link></Navbar>
                        <Nav className="me-auto">
                            <Nav href="#Blog"> <Link to="Blog">Blog</Link></Nav>


                            <Nav href="#Product"><Link to="Product">Product</Link></Nav>
                            <Nav href="#conact"><Link to="Conact">Conact</Link></Nav>
                            <Nav href="#Search"> <Link to="Search">Search</Link></Nav>
                            <Nav href="#Link"> <Link to="Help">Help</Link></Nav>

                        
                        </Nav>
                        <Button as="input" type="button" value="Login" />
                    </Container>
                </Navbar>
                <Outlet />

            </>
        
    )
}

export default Navebar_one