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
        <ul id="messages">
        {
          this.state.messages && this.state.messages.map((msg) =>   
            <li>{msg}</li>               
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
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
