import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu,NavLinks,  NavLink} from './Navbar.elements';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {

    const [ clicked, setClicked ] = useState(false);

    const toggle = () => {
        setClicked(!clicked);
    }
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
                        {/* <NavLinks>
                            <NavLink to='/'>HOME</NavLink>
                            <NavLink to='/'>ABOUT</NavLink>
                            <NavLink to='/'>SERVICES</NavLink>
                        </NavLinks> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;