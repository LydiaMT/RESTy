import React from 'react';
import './history.scss'

class History extends React.Component{

  render(){
    let items = this.props.history.map((query, idx) => {
      const eventHandler = this.props.handleHistory(idx)
      return (
        <li key={idx}>
          <div onClick={eventHandler}>
            <span>{query.method} </span> 
            <span>{query.url}</span>
          </div>
          <button type="button" onClick={this.props.rerun(idx)}>rerun</button>
        </li>
      )}
    )

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
