import React from 'react';
import './form.scss'

class Form extends React.Component {

  render() {
    return (
      <>
        <form onSubmit={this.props.handelSubmit} value={this.props.method}>
          <section>
            <label>URL:</label> 
            <input type="text" value={this.props.url} onChange={this.props.handleChange} />
            <button type="submit">GO!</button>
          </section>
          <section>
            <button onClick={this.props.handelClick} className="rest-action" value="GET">GET</button>
            <button onClick={this.props.handelClick} className="rest-action" value="POST">POST</button>
            <button onClick={this.props.handelClick} className="rest-action" value="PUT">PUT</button>
            <button onClick={this.props.handelClick} className="rest-action" value="DELETE">DELETE</button>
          </section>
        </form>
      </>
    );
  }

}

export default Form;
