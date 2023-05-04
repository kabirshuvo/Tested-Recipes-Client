import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../pages/Footer/Footer';

const BanglarChef = () => {
    return (
        <>
    
        <Header></Header>
        
   
         <Container>
           
         
           
           <Row>
            <Col lg={7}>
            <p>Here Will be recipe cards</p>
            </Col>

            <Col lg={5}>
            <Outlet></Outlet>
               
            </Col>
           
           </Row>

           <Row></Row>
   
   
         </Container>
   
         <Footer></Footer>
       </>
    );
};

export default BanglarChef;