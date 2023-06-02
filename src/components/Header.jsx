import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// Functional component, Import directly properties (props.name)
const TopHeader = ({ name,mode, toggleMode}) => {
    return (
        <>
            <Navbar bg={mode} expand="lg">
                <Container fluid>
                    <Link className='navbar-brand' to="/" style={{color : mode ==='dark'?'white':'black'}}>{name}</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to="/" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Home</Link>
                            <Link className='nav-link' to="/about" style={{ color: mode === 'dark' ? 'white' : 'black' }}>About</Link>
                        </Nav>
                        <Form className="d-flex align-items-center">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" style={{color : mode ==='dark'?'white':'black'}}>Search</Button>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    label="Mode"
                                    className='mx-2'
                                    style={{color : mode ==='dark'?'white':'black'}}
                                    onClick={toggleMode}
                                />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

// Validation for props, also you can set isRequired property
TopHeader.propTypes = {
    name: PropTypes.string.isRequired
    // text: PropTypes.string
}

// Default props
TopHeader.defaultProps = {
    name: 'Give Name Here'
}

export default TopHeader