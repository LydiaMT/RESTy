import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if'; 
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
        <If condition={this.props.searchLoading}>
          <Then>
            <h1 >Loading...</h1>
          </Then>
          <Else>
            <ReactJson header={this.props.header} src={this.props.results} /> 
          </Else>
        </If>
      </section>
    )
  }
}

export default Results;
