import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss'

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <section className="output">
        <ReactJson header={this.props.header} src={this.props.results} />
      </section>
    )
  }
}

export default Results;
