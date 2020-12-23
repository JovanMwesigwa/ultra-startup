import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavBtnLink, NavItemBtn, NavLogo, NavIcon, MobileIcon, NavMenu,NavLinks,  NavLink} from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles'


function Navbar() {

    const [ clicked, setClicked ] = useState(false);

    const [ button, setButton ] = useState(true);

    const toggle = () => {
        setClicked(!clicked);
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[])

    // window.addEventListener('resize', showButton());
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        {
                            clicked ? <FaTimes /> : <FaBars />  
                        }
                    </MobileIcon>
                    <NavMenu onClick={toggle} clicked={clicked}>
                        <NavLinks>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                        </NavLinks>
                        <NavItemBtn>
                            {
                                button ? (
                                    <NavBtnLink to='/signup'>
                                        <Button  primary >SIGNUP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/signup'>
                                        <Button primary fontBig>SIGNUP</Button>
                                    </NavBtnLink>
                                )
                            }
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;