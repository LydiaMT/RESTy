import React from 'react';
import Form from './components/form/form'
import History from './components/history/history'
import Help from './components/help/help'
import Results from './components/results/results'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: [],
      url: '',
      method: '',
      history: [],
      outputLoad: false,
    }
  }
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  toggleSearchLoading = () => {
    this.setState({ searchLoading: !this.state.searchLoading})
  }
  
  handleChange = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  handelClick = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  handelSubmit = async e => {
    e.preventDefault();
    this.toggleSearchLoading()
    let method = this.state.method;
    let url = this.state.url
    await axios({method, url})
      .then(data => {
        let results = data.data.results
        this.setState({ results });
      })
    this.toggleSearchLoading()
    this.toggleLoading()
    this.updateHistory({method, url})
  }

  updateHistory = item => {
    this.setState({ history: [...this.state.history, item] })
    localStorage.setItem("history", JSON.stringify(this.state.history))
  }

  handleHistory = (method, url) => {
    this.setState({ method, url })
  }

  render() {
    return (
      <React.StrictMode>
        <Switch>
          <Route exact path="/">
            <Form 
              toggleLoading={this.toggleLoading} 
              toggleSearchLoading={this.toggleSearchLoading} 
              handleChange={this.handleChange} 
              handelClick={this.handelClick}
              handler={this.handleForm} 
              handelSubmit={this.handelSubmit}
              url={this.state.url}
              method={this.state.method}
              />
            <div className="output-wrapper">
              <History 
                handleHistory={this.handleHistory}
                history={this.state.history}/>
              <Results
                results={this.state.results} 
                searchLoading={this.state.searchLoading}/>
            </div>
          </Route>
          <Route exact path="/History">
            <History 
              handleHistory={this.handleHistory}
              history={this.state.history}/>
          </Route>
          <Route exact path="/Help">
            <Help/>
          </Route>
        </Switch>

      </React.StrictMode> 
    );
  }
}

export default App;
