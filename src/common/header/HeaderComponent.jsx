import React from 'react';
import './HeaderComponent.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        Noah Kannianen
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/aboutme">About Me</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        {/*<Nav.Link href="/projects">Projects</Nav.Link> will complete later*/}
                    </Nav>
                </Navbar>
            </div>
            )
        }
    }
    
export default HomeComponent;