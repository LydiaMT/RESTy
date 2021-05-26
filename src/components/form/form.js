import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: '',
      method: '',
      show: false,
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

  handelSubmit = async e => {
    e.preventDefault();

    let raw = await fetch('https://swapi.dev/api/people/');
    let data = await raw.json();
    console.log("data", data)
    let count = data.count
    let people = data.results
    this.props.handler(count, people)
    this.props.toggleLoading()
    // this.setState({ show: true })   
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
            <button onClick={this.handelClick} className="rest-action" value="GET">GET</button>
            <button onClick={this.handelClick} className="rest-action" value="POST">POST</button>
            <button onClick={this.handelClick} className="rest-action" value="PUT">PUT</button>
            <button onClick={this.handelClick} className="rest-action" value="DELETE">DELETE</button>
          </section>
        </form>
      </>
    );
  }

}

export default Form;
