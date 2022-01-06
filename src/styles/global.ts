import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
   
    --blue:#5429CC;
    --border: #8362df;
    --white:#fff;
  }
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Font-size:16px (Desktop) */
  html{
    @media (max-width:1000px){
      font-size:93.75%;  /*15px*/
    }
    @media (max-width:720px) {
      font-size:87.5%; /*14px*/
    }
  }
  body {
    background: var(--white);
    -webkit-font-smoothing:antialiased;
  }
  body, input, textarea, button {
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }
`