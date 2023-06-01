import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Functional component, Import directly properties (props.name)
const TopHeader = ({ name,mode, toggleMode}) => {
    return (
        <>
            <Navbar bg={mode} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{color : mode ==='dark'?'white':'black'}}>{name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" style={{color : mode ==='dark'?'white':'black'}}>Home</Nav.Link>
                            <Nav.Link href="/about" style={{color : mode ==='dark'?'white':'black'}}>About</Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" style={{color : mode ==='dark'?'white':'black'}}>Search</Button>
                            <Form className='mx-2'>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    label="Mode"
                                    style={{color : mode ==='dark'?'white':'black'}}
                                    onClick={toggleMode}
                                />
                            </Form>
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