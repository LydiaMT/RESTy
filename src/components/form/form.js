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
    let raw = await fetch(this.state.url);
    let data = await raw.json();
    let header = raw.headers
    let count = data.count
    let results = data.results
    this.props.handler( header, count, results )
    this.props.toggleLoading()
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
