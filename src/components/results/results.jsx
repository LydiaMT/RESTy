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
        <h3>Results</h3>
        <If condition={this.props.error}>
          <Then>
            <p>Invalid request. Try again.</p>
          </Then>
        </If>
        <If condition={this.props.searchLoading}>
          <Then>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </Then>
          <Else>
            <If condition={Object.keys(this.props.header).length > 0}> 
              <Then>
                <p>HEADER</p>
                <ReactJson src={this.props.header} className="reactJson"/> 
                <p>BODY</p>
                <ReactJson src={this.props.results} className="reactJson" /> 
              </Then>
            </If>
          </Else>
        </If>
      </section>
    )
  }
}

export default Results;
