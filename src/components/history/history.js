import React from 'react';
import './history.scss'

class History extends React.Component {
  constructor(props){
    super(props)
    this.state={
      // queries = [],
    }
  }

  render(){
    return(
      <section className="history">
        <h1>History</h1>
      </section>
    )
  }

}

export default History
