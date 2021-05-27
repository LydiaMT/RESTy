import React from 'react';
import './history.scss'

class History extends React.Component{
  render(){
    let items = this.props.history.map((query, idx) => <li key={idx}>{query}</li> )
    return(
      <React.Fragment>
      <section className="history">
        <h1>History</h1>
        <ul>
          {items}
        </ul>
      </section>
    </React.Fragment>
    )
  }
}

export default History
