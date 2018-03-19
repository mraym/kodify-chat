// import packages
import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css';

// Making the App component
class App extends Component {
  constructor() {
    super()
    
    this.state = {
      nickname: '',
      isYourMessage: false,
      message: '',
      messages: [],
      endpoint: "http://localhost:8890" // this is where we are connecting to with sockets
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addMessageToMessageList(newMessage) {
    this.setState({messages: [...this.state.messages, newMessage]});
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint)
    socket.on('chat message', (message) => {
      console.log(message);
      this.addMessageToMessageList(message);
      this.setState({message: ''});
    })
  }
    
  handleSubmit = (event) =>  {
    event.preventDefault();

    let message = this.state.message;

    // only send real messages
    if (message.trim() !== '') {
      this.setState({isYourMessage: true});
      const socket = socketIOClient(this.state.endpoint);
      socket.emit('chat message', message.trim());
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    let message = event.target.value;
    this.setState({message: message});
  }

  displayCorrectSpeechBubble(message) {
    if (this.state.isYourMessage) {
      return <div className="speech-bubble-green">{message}</div>
    } else {
      return <div className="speech-bubble-gray">{message}</div>
    }
  }
  
  render() {
    return (
      <div>
        <ul id="messages">
        {
          this.state.messages && this.state.messages.map((msg, index) =>
            <li key={index}>
              { this.displayCorrectSpeechBubble(msg) }
              <div className="clear-both"/>
            </li>      
          )
        }         
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="m" 
            autoComplete="off" 
            value={this.state.message} 
            onChange={this.handleChange}/>
          
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default App
