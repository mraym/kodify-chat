const messageSentStyle = {
  padding: '5px 10px',
  margin: '5px',
	position: 'relative',
  background: '#46ee3f', // light green
  color: 'black',
	borderRadius: '.4em',
  float: 'right',
};

const clearBothStyle = {
  clear: 'both'
}

const messagesStyle = { 
  margin: 0, 
  padding: 0
}

const formStyle = { 
  padding: '3px', 
  position: 'fixed', 
  bottom: 0, 
}


class App extends React.Component {
	constructor() {
		super();
		this.state = {
      nickname: '',
      message: '',
      messages: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleSubmit = (event) =>  {
    event.preventDefault();
    let message = this.state.message;

    if (message.trim() !== '') {
      let newArray = this.state.messages.slice();    
      newArray.push(message);
      this.setState({messages: newArray})
      this.setState({message: ''})
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    let message = event.target.value;
    this.setState({message: message});
  }

  render() {
    return (
      <div>
        <div id="messages" style={messagesStyle}>
        {
          this.state.messages && this.state.messages.map((msg) =>
            <div>
              <div style={messageSentStyle}>{msg}</div>
              <div style={clearBothStyle}/>    
            </div>      
          )
        }         
        </div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input 
            name="m" 
            autoComplete="off" 
            value={this.state.message} 
            onChange={this.handleChange}/>
          
          <button>Send</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
