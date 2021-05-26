import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss'

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state={    
    }
  }

  render(){
    return(
      <section className="output">
        <ReactJson src={this.props.people} />
      </section>
    )
  }
}

export default Results;
