import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import { animateScroll as scroll } from 'react-scroll'


const Nav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    height: 100px;
    background: var(--blue);
    /* margin-bottom:250px; */

    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    background-color:var( --blue);
    z-index:1;
    border-bottom: 1px solid var(--border);
    .logo{
       margin:15px 0 0 25px;
       color: #ccc;
       width: 160px;
       height: 70px;
    }
    p{ 
        font-size:1.5rem;
        color:var(--white);
        margin-left:25px ;
        margin-top:25px;
      }
`

const Navbar = () => {
    return(
        <Nav>
            <div className="vamo"> 
            <p onClick={() => scroll.scrollToTop()}>Citações</p>
             </div>
            <Burger />
        </Nav>
    )
}

export default Navbar