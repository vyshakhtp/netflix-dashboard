import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Navbar, NavbarBrand,Nav } from 'react-bootstrap';
import Home from './Home';
import Movies from './Movies';
import Series from './Series';
import Mylist from './Mylist';
import'./MyNavbar.css';
function MyNavbar(){
    const [page,setPage] = useState('home');
    const changePage=(newPage)=>{
        setPage(newPage);
    };
    return(
        <div>
            <Navbar bg='dark' variant='dark' expand="lg">
                <Container>
                    <NavbarBrand style={{color:'red'}}>
                        NETFLIX
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls='basic-navbar'/>
                    <Navbar.Collapse id='basic-navbar'>
                        <Nav className="ms-auto">
                            <Button variant='link' className="nav-button" onClick={()=>changePage("home")}>Home</Button>
                            <Button variant='link' className="nav-button" onClick={()=>changePage("movies")}>Movies</Button>
                            <Button variant='link' className="nav-button" onClick={()=>changePage("series")}>Series</Button>
                            <Button variant='link' className="nav-button" onClick={()=>changePage("MyList")}>My List</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {page === 'home' && <Home />}
            {page === 'movies' && <Movies />}
            {page === 'series' && <Series/>}
            {page === 'MyList' && <Mylist/>}
        </div>   
    )
}
export default MyNavbar;