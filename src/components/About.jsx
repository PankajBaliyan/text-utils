import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

export default function About({mode}) {
    // const style = {
    //     backgroundColor: 'black',
    //     color: 'white'
    // }
    // const [btnTxt, setBtnTxt] = useState("Enable Dark Mode")
    // const [styleObj, setStyleObj] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })

    // const toggleTheme = () => {
    //     if(styleObj.backgroundColor === 'white'){
    //         setStyleObj({
    //             backgroundColor:'black',
    //             color:'white'
    //         })
    //         setBtnTxt('Enable Light Mode')
    //     } else {
    //         setStyleObj({
    //             backgroundColor:'white',
    //             color:'black'
    //         })
    //         setBtnTxt('Enable Dark Mode')
    //     }
    // }

    // border border-danger border-2
    return (
        <div className='container mt-3 p-3 rounded-3' style={{backgroundColor: 'white', border : mode === 'dark' ? '' : '2px solid #8a8484'}}>
        <h1>About</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* <Button className='my-3' onClick={toggleTheme} variant="primary">{btnTxt}</Button> */}
        </div>
    )
}