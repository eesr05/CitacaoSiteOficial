import { Container } from "./style"
import { animateScroll as scroll } from 'react-scroll'
export function Header(){
  
  return(

    <Container>
      <p onClick={() => scroll.scrollToTop()}>Citações</p>
    
      
    </Container>
    
   
  )

}