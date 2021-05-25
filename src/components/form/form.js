import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      method: '',
      print: false,
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  handleClick = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  handelSubmit = e => {
    e.preventDefault();
    this.setState({ print: true})   
  }

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <section>
            <label>URL:</label> 
            <input type="text" value={this.state.url} onChange={this.handleChange} />
            <button type="submit">GO!</button>
          </section>
          <section>
            <button onClick={this.handleClick} className="rest-action" value="GET">GET</button>
            <button onClick={this.handleClick} className="rest-action" value="POST">POST</button>
            <button onClick={this.handleClick} className="rest-action" value="PUT">PUT</button>
            <button onClick={this.handleClick} className="rest-action" value="DELETE">DELETE</button>
          </section>
        </form>
        <section className="output">
          {this.state.print && <p>{this.state.method} {this.state.url}</p>}
        </section>
      </>
    );
  }

}

export default Form;
