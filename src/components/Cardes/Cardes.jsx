import React from 'react'
import {Card} from './styles'
import redacao from './Text'

// import TextModal from '../TextModal/TextModal'
// const id = redacao.id

class Cardes extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      render: false,
      numberOfText: 0,
      show:false
    }
    this.alertHi = this.alertHi.bind(this);
  }
  
  alertHi() {
  	this.setState({render: !this.state.render});
  }

  render(){
    

    return (
      <Card>
      <div className="cards">
      <center>
      <h2 className="temas hvr-grow"><mark>Temas</mark></h2>
      </center>
        <div className="maindiv" >


          {redacao.map((coisas) => {
              return(
                <div>                
                  <div className="maindiv-2 hvr-grow "  > 
                      <p key={coisas.id}>{coisas.title}</p>            
                          {this.state.render && <div className=""></div>}                              
                   </div>
              </div>) 
            }
          )
       }         
        </div>           
      </div>     
      </Card>
    )
  }
}
export default Cardes;