import React from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 25px 17px;
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
      <li>Temas</li>
      <li>Saiba Mais</li>
   
    </Ul>
  )
}

export default RightNav