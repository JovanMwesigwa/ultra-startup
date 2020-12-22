import styled from "styled-components";
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaMagento} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    /* display: none; */
    display: flex;
    /* flex-direction: row; */

    @media screen and (max-width: 960px){
        height: 90vh;
        background: #101522;
        width: 100%;
        display: block;
        position: absolute;
        top: 80px;
        left: ${({clicked}) => (clicked ? 0 : '-100%')};
        transition: 0.5s ease-in-out;
    }


`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 960px){
        
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }

`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    /* margin-bottom: 0.5rem; */
    margin: 0.5rem;
    margin-left: 0.5rem;

    &:hover{
        font-size: 1.8rem;
        background-color: #fff;
        border-bottom-color: #fff;
        color: #101522;
        font-weight: 600;
        transition: 0.4s ease-in;
    }
`;

