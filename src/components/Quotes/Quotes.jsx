import React from 'react'
import {Quotes} from './styles'

class QuoteAndAuthor extends React.Component{
    render(){
        const randomColor =  'whitesmoke'                            //this.props.displayColor()
        const html = document.documentElement
        html.style.backgroundColor = randomColor
        return(
            <Quotes>
            <center>
            <div id="quotebox"  className="quotebox hvr-grow" style={{backgroundColor: "#E1E1E1"}}>
                <div className="fadeIn" key={Math.random()} style={{color: '#3F6FF0  '}}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">- {this.props.author ? this.props.author : "Unknown"}-</h5>
                </div>
                <button id="newquote" style={{backgroundColor: 'var(--blue)'}} onClick={this.props.handleClick}> Nova citação</button>
            </div>
             <button id="newquote2" style={{backgroundColor: '#D96E48'}} onClick={this.props.handleClick}> Nova citação</button> 
             </center>
            </Quotes>
        )
    }
}

export default QuoteAndAuthor