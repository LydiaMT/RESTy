import React from 'react';
import './history.scss'
import { withRouter } from "react-router-dom";

class History extends React.Component{

  getHistory = e => {
    let req = e.target.innerHTML;
    req = req.split(' ');
    let method = req[0]
    let url = req[1]
    console.log(method,url)
    this.props.handleHistory(method, url)
  }

  render(){
    let items = this.props.history.map((query, idx) => 
      <li key={idx} onClick={this.getHistory}>{query.method} {query.url}</li>)
    return(
      <React.Fragment>
      <section className="history">
        <h3>History</h3>
        <ul>
          {items}
        </ul>
      </section>
    </React.Fragment>
    )
  }

}

export default History
