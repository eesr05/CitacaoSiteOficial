
import React from 'react';
import { Header } from './components/Header';
import Navbar from './components/Header/Nav/Navbar';
import QuotesAndAuthor from './components/Quotes/Quotes';
import { GlobalStyle } from './styles/global';
import quotes from './components/Quotes/QuotesDatabase';
import Cardes from './components/Cardes/Cardes';
import Text from './components/TextHow/Text';
import redacao from './components/Cardes/Text';

class App extends React.Component{
 
  constructor(){
    super()
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      title: redacao[0].title,
      
    }
  }

  randomQuotes(){
    const randomNumber = Math.floor(Math.random() * quotes.length)
    return quotes[randomNumber]
  }

  shuffleQuotes(array){
    return array.sort(() => Math.random()-0.5)
  }

  handleClick = () =>{
    const generateRandomQuote = this.randomQuotes()
    this.setState({
      quote:generateRandomQuote.quote,
      author: generateRandomQuote.author
    })
    this.shuffleQuotes(quotes)
  }

  randomColor(){
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`

      return color
  }

    handleClick2() {
        this.setState({
            open: !this.state.open
        });
    } 

  

  render(){
    return(
      <>
      <GlobalStyle />
      <Header />
       <Navbar />
        <div>   
           <QuotesAndAuthor displayColor={this.randomColor} handleClick={this.handleClick} {...this.state}/>
        </div>
        <Text/>
      <Cardes   {...this.state}/>

 
     

      
     
      </>
    )
  }
}

export default App