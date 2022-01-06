import React from 'react';
import styled from 'styled-components';
import { Link,  animateScroll as scroll } from 'react-scroll'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 30px 20px;
    color: var(--white);
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--blue);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: var(--white);
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
           <li><Link  smooth={true} duration={1000} className="homeLink"  onClick={() => scroll.scrollToTop()}> Home </Link></li>
            <li><Link to='texto' smooth={true} duration={1000}> Mais </Link></li>   
            <li><Link to=' cards' smooth={true} duration={1000}>Temas</Link></li>     
    </Ul>
  )
}

export default RightNav