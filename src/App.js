import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    };

    this.loadQuote = this.loadQuote.bind(this);
    this.loadQuote();
  }
  loadQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.content + " | " + data.author);
    
        this.setState({
          quote: data.content,
          author: data.author
        })
      })
  }
  render() {
    return (
      <div id='quote-box'>
        <h2 id='text'>"{this.state.quote}</h2>
        
        <p id='author'>-{this.state.author}</p>

        <button id='new-quote' onClick={this.loadQuote}>New quote</button>

        <a id='tweet-quote' href="https://twitter.com/intent/tweet" target='_blank'>
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    );
  }
}

export default App;