import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      method:''
    }
  }

  handleChange = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  handelClick = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  render() {
    return (
      <>
        <form>
          <section>
            <label>URL:</label> 
            <input type="text" value={this.state.url} onChange={this.handleChange} />
            <button onClick={this.handelClick}>GO!</button>
          </section>
          <section>
            <button onClick={this.handelClick} className="rest-action" value="GET">GET</button>
            <button onClick={this.handelClick} className="rest-action" value="POST">POST</button>
            <button onClick={this.handelClick} className="rest-action" value="PUT">PUT</button>
            <button onClick={this.handelClick} className="rest-action" value="DELETE">DELETE</button>
          </section>
        </form>
        <section className="output">
          <p className="output-text">{this.state.method} {this.state.url}</p>
        </section>
      </>
    );
  }

}

export default Form;
