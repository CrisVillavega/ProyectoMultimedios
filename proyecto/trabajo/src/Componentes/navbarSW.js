import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, FormControl, Form, Button, Image, Container, Row, Col, Modal, CloseButton } from 'react-bootstrap';
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoFacebook, IoMdPerson, IoMdSearch } from 'react-icons/io';
import SW from './SWb.png';
import SWr from './SWr.png';
const Navbar = () => {
    const [search, setsearch] = useState(false);
    const [btnsearch, setbtnsearch] = useState(true);
    const [sing, setsing] = useState(false);
    const searchClick = () => {
        setsearch(!search);
        setbtnsearch(!btnsearch);
    };
    const SingInClick = () => {
        setsing(true);
    };
    const closeSing = () => {
        setsing(false);
    };
    const enviarSing = (e) => {
        e.preventDefault();
        setsing(false);
    };
    return (
        <Nav style={{ background: 'black', border: '1px solid white' }}>
            <Container>
                <Row>
                    <Col md={3} style={{ marginTop: '30px', justifyContent: 'left' }}>{/* Networt */}
                        <NavItem>

                            <div className="d-flex align-items-center">
                                <NavLink href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699" style={{ padding: '5px' }}>
                                    <div style={{ margin: '0', padding: '0', borderRadius: '50%' }}>
                                        <IoLogoFacebook className="text-white" style={{ fontSize: '24px', borderRadius: '200px' }} />
                                    </div>
                                </NavLink>
                                <NavLink href="https://www.instagram.com/starwars/" style={{ padding: '5px' }}>
                                    <IoLogoInstagram className="text-white" style={{ fontSize: '24px' }} />
                                </NavLink>
                                <NavLink href="https://www.youtube.com/user/starwars" style={{ padding: '5px' }}>
                                    <IoLogoYoutube className="text-white" style={{ fontSize: '24px' }} />
                                </NavLink>
                                <NavLink href="href='https://twitter.com/starwars'" style={{ padding: '5px' }}>
                                    <IoLogoTwitter className="text-white" style={{ fontSize: '24px' }} />
                                </NavLink>
                                <NavLink href="/home" style={{ padding: '5px' }}>
                                    <p className="m-0 ml-2 text-white">|</p>
                                </NavLink>
                                <NavLink >
                                    <button href="https://www.starwarskids.com/" style={{ borderRadius: '50px', marginTop: '0x', height: '19px', width: '40px', }}><h5 style={{ fontSize: '14px', fontFamily: 'fantasy' }}>KIDS</h5></button>
                                </NavLink>
                            </div>

                        </NavItem>
                    </Col>

                    <Col md={6} className="d-flex justify-content-center align-items-center" style={{marginTop: '30px'}}>
                        <img src={SW} href='http://localhost:3000/' alt="Star Wars" width="200px" height="100px" />
                    </Col>
                    <Col md={3} className="d-flex justify-content-top" style={{ height: '40px', alignContent: 'center', marginTop: '30px', justifyContent: 'right' }}>
                        <div style={{ borderBlockColor: 'white' }}> {/* Search */}
                            {btnsearch && (
                                <Button variant="outline" onClick={searchClick} style={{ color: 'white' }}>
                                    <IoMdSearch />
                                    Search
                                </Button>
                            )}
                            {search && (
                                <Form className="d-flex" style={{ background: 'black', border: '1px solid white' }}>
                                    <Button variant="outline" onClick={searchClick} style={{ background: 'black' }}><IoMdSearch style={{ color: 'white' }} /> </Button>
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="md-3 border-0"
                                        aria-label="Search"
                                        style={{ background: 'black', padding: '0' }}
                                        border='1px solid black'
                                    ></FormControl>
                                    <Button variant="outline" onClick={searchClick} style={{ background: 'black', color: 'white' }}>  <b>X</b></Button>
                                </Form>
                            )}
                        </div>
                        <div> {/* Sing in */}
                            <Button variant="outline" onClick={SingInClick} style={{ color: 'white' }}>
                                <IoMdPerson /><b>Sing in</b>
                            </Button>
                            <Modal show={sing} centered>
                                <Modal.Header style={{ backgroundColor: '#1b1b1b', color: 'yellow', border: 'none', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'right' }}>
                                        <CloseButton onClick={closeSing} style={{ backgroundColor: '1b1b1b', marginLeft: '450px' }} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image src={SWr} alt="Star Wars" width="350px" height="100px" />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                        <Modal.Title style={{ textAlign: 'center' }}>ENTER YOUR EMAIL ADDRESS</Modal.Title>
                                    </div>

                                </Modal.Header>
                                <Modal.Body style={{ backgroundColor: '#1b1b1b' }}>
                                    <Form onSubmit={enviarSing}>
                                        <FormControl type="EMAIL" placeholder="Email Address" className="mb-3" style={{ backgroundColor: 'white', color: 'white' }} required />
                                        <Button variant="primary" type="submit" style={{ backgroundColor: '#464646', alignContent: 'center', border: 0, width: '470px', marginBottom: '30px' }}>
                                            Enviar
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </Col>
                </Row>
                <div>
                    <div style={{ display: 'inline-flex' }}>
                        <div style={{ marginLeft: '100px', padding: '20px' }}>
                            <a href="https://www.starwars.com/news" className="text-white" style={{ textDecoration: 'none' }}>
                                NEWS + FEATURES
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/video" className="text-white" style={{ textDecoration: 'none' }}>
                                VIDEO
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/films" className="text-white" style={{ textDecoration: 'none' }}>
                                FILMS
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/series" className="text-white" style={{ textDecoration: 'none' }}>
                                SERIES
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/interactive" className="text-white" style={{ textDecoration: 'none' }}>
                                INTERACTIVE
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/community" className="text-white" style={{ textDecoration: 'none' }}>
                                COMMUNITY
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px' }}>
                            <a href="https://www.starwars.com/databank" className="text-white" style={{ textDecoration: 'none' }}>
                                DATABANK
                            </a>
                        </div>
                        <div style={{ marginLeft: '20px', padding: '20px', display: 'inline-flex' }} >
                            <a href="https://www.starwars.com/disneyplus" className="text-white" style={{ textDecoration: 'none', ':hover': { color: 'gray' } }}>
                                DISNEY+
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Nav >
    );
}
export default Navbar;