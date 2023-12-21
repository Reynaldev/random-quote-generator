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
  // Load quotes from https://api.quotable.io/random and parse it as JSON. 
  // Then, set the state from the parsed JSON. 
  loadQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.content + " | " + data.author);
    
        this.setState({
          quote: data.content,
          author: data.author
        })
      })
  }
  render() {
    return (
      <div id='quote-box' class="container">
        <h2 id='text'>"{this.state.quote}</h2>
        
        <h5 id='author'>-{this.state.author}</h5>

        <div class="row">
          <div class="col">
            <button id='new-quote' class="btn btn-dark" onClick={this.loadQuote}>New quote</button>
          </div>
          <div class="col-sm-2">
            <a id='tweet-quote' class="btn btn-dark" href="https://twitter.com/intent/tweet" target='_blank'>
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;