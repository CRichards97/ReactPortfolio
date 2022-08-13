import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import RichardsLogo from './app/assets/img/job204-wan-18.jpg';
import './App.css';
import CertificatesCard from './features/certificates/CertificatesCard'
import { CERTIFICATES } from './app/shared/CERTIFICATES';

function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={RichardsLogo} alt='richards logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            <CertificatesCard certificate= {CERTIFICATES[0]} />
        </div>
    );
}

export default App;
