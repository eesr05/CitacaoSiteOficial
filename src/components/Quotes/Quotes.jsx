import React from 'react'
import {Quotes} from './styles'
import Book from '../../assets/book.jpg'
class QuoteAndAuthor extends React.Component{
    render(){
        const randomColor =  'white'                            //this.props.displayColor()
        const html = document.documentElement
        html.style.backgroundColor = randomColor
        return(
            <>
            <Quotes>
            <center>
            <div id="quotebox"  className="quotebox hvr-grow" style={{backgroundColor: "#E1E1E1"}}>
                <div className="fadeIn" key={Math.random()} style={{color: '#3F6FF0  '}}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h5 id="author">- {this.props.author ? this.props.author : "Unknown"}-</h5>
                </div>
                <button id="newquote" style={{backgroundColor: 'var(--blue)'}} onClick={this.props.handleClick}> Nova citação</button>
            </div>
             <button id="newquote2" style={{backgroundColor: 'var(--blue)'}} onClick={this.props.handleClick}> Nova citação</button> 
             </center>
            </Quotes>
            <img id="image-book"src={Book} alt="Book"></img>
            </>
        )
    }
}

export default QuoteAndAuthor