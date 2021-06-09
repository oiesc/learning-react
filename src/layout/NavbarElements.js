import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

// style for nav menu
export const Nav = styled.nav`
    background: #212529;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    z-index: 10;
    font-weight: bold;
`;

// style for nav link
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 1.5rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #337ab7;
    }
`;

// style for the open/close menu button
export const StyledBurger = styled.div`
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    position: fixed;
    top: 36px;
    right: 15px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 3rem;
        height: 0.4rem;
        background-color: ${({ open }) => open ? '#ccc' : '#fff'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

// style for menu change
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 2;
    li {
        margin-top: 10px;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: rgb(10, 14, 34);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-left: 0;
        padding-top: 10rem;
        transition: transform 0.3s ease-in-out;
        li {
            margin-top: 0px;
            padding-left: 30px;
            border-top: 1px solid #fff;
            color: #fff;
        }
        li:last-child{
            border-bottom: 1px solid #fff;
        }
    }
`;