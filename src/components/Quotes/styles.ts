import styled from "styled-components";

export const Quotes = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap');
body{
  margin:0;
  overflow-x: hidden;
  background-color: var(--background)!important;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  
}
html{
  transition: background-color 1s;  
}
mark{
  color: #fff;
  background-color: #E97146;
}
#root{
  width:100%;
}

.quotebox{
  height: auto;
  width: 100%;
  border: 1px rgb(145, 126, 126);
  border-radius: 10px;
  text-align: right;
  max-width: 35rem;
  padding-right:5px;
  margin-top:10px;
  margin:200px 400px;
}

img{
  height:50%;
}
.quote{
  margin:20px;
  text-align: left;
}

.fadeIn{
  opacity: 0;
  display: block;
  animation: slidein 1s ease-out forwards;
}

@keyframes slidein{
  0%{
    opacity: 0;
    transform: translateY(-25px)
  }
  100%{
    opacity: 1;
    transform: translateY(0px)
  }
}

#author{
  margin: 20px;
  font-style: italic;
}

#newquote, #newquote2{
  margin: 20px;
  position: relative;
  border-radius: 5px;
  height: 35px;
  font-weight:300;
  font-family: "Poppins", sans-serif;
  color:#D9D9D9;
}

#newquote2{
  display: none ;
}

.homeLink{
  display: none;
}

 @media only screen and (min-width:370px){

  img{
    display:none;
  }
  #newquote2{
    margin: 23px 0 0 2rem;
  }
  .howredacao h2{
    margin: 1rem;
  }
  .maindiv{
    display: grid;    
    grid-template-columns:repeat(1, 2fr)!important; 

} 
@media only screen and (max-width: 800px){
  img{
    display:none;
  }
  .quotebox{
    margin:240px 0 0 30px;
    width: 85%;
   
    text-align: center;
    display: flex;
  }
  #newquote{
    display: none;
  }
  #newquote2{
    display: flex;
    margin: 23px 0 0 7rem;
    align-items: center; 
    border-color: var(--border) !important; 
  }

  #quote{
    font-size: 18px;
  }
  .maindiv{
    display: grid;    
    grid-template-columns:repeat(1, 2fr)!important;
  }

  .maindiv-2{
    margin-right: 29px;
    margin-left: 2.5rem;
    border: 2px solid #e97146 ;
  }

  .footer{
    margin-top: 90rem;
  }

  mark{
    text-align: center;
    color: rgb(249, 250, 249);
    /* line-height: 55px; */
    white-space: nowrap;
    font-size:1.5rem;
    margin-right:0.1rem;
  } 
}
 
@media only screen and (max-width: 1090px){
  .maindiv{
    grid-template-columns:repeat(2, 2fr)!important;
  }
  img{
    display:none;
  }
} 


`