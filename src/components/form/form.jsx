import React from 'react';
import './form.scss'

class Form extends React.Component {

  render() {
    return (
      <>
        <form onSubmit={this.props.handelSubmit} value={this.props.method} >
          <section>
            <label>URL:</label> 
            <input required type="text" className="url-input" value={this.props.url} onChange={this.props.changeURL} placeholder=""/>
            <button className="go" type="submit">GO!</button>
          </section>
          <section>
            <button onClick={this.props.handleDemo} className="demo" value="GET">DEMO</button>
            <button onClick={this.props.changeMethod} className="rest-action" value="GET">GET</button>
            <button onClick={this.props.changeMethod} className="rest-action" value="POST">POST</button>
            <button onClick={this.props.changeMethod} className="rest-action" value="PUT">PUT</button>
            <button onClick={this.props.changeMethod} className="rest-action" value="DELETE">DELETE</button>
          </section>
          <section>{
            this.props.method === 'POST' || this.props.method === 'PUT' ? (
            <textarea value={this.props.body} onChange={this.props.changeBody} className="query-parameters" placeholder="body"></textarea>
            ): null            
            }
          </section>
        </form>
      </>
    );
  }

}

export default Form;