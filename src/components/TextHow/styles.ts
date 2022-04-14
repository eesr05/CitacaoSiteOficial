import styled from "styled-components";

export const Texto = styled.div`
.section{
  margin-top: 600px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
   
}
h2{
  text-align: center; 
  color:#F23005 !important;
  margin-bottom: 50px;
 
}

.Howredacao{
  font-weight: normal;
  max-width: 50em;
  justify-content: center;    
  margin: 23px 350px; 
  text-indent: 2em;
  text-align: justify;
  line-height: 25px;
}

.competencia{
  font-weight: bold;
  font-family: 'Roboto',sans-serif;
  text-align: left;
  color: var(--blue);
  margin:1rem;
}

p {  
  font-family: 'Roboto',sans-serif;
  font-weight: lighter !important;
}
mark{
  color:var(--blue);
  
}
@media only screen and (max-width: 800px){
  .Howredacao{
    margin:2em;
    text-indent: 0.1rem;
  }
 .howredacao h2{
    margin: 1rem;
  }
}


`