import React from 'react';
import Form from './components/form/form'
import History from './components/history/history'
import Help from './components/help/help'
import Results from './components/results/results'
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      results: [],
      url: '',
      method: '',
      body:'',
      history: [],
      outputLoad: false,
      redirect: null,
    }
  }
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  toggleSearchLoading = () => {
    this.setState({ searchLoading: !this.state.searchLoading})
  }
  
  changeURL = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  changeBody = e => {
    let body = e.target.value
    this.setState({ body })
  }

  changeMethod = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  handelSubmit = async e => {
    if(e) e.preventDefault();
    this.toggleSearchLoading()
    const { method, url, body } = this.state // pulling keys off state object
    await axios({ method, url, data: body })
      .then(data => {
        let results = data.data
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

  handleHistory = (idx) => { 
    return (_event) => {
      const { method, url } = this.state.history[idx]
      this.setState({ method, url })
    };
  }

  rerun = (idx) => { 
    return (_event) => {
      const { method, url, body } = this.state.history[idx]
      this.setState({ method, url , body , redirect: '/' })
      this.handelSubmit()
    };
  }

  render() {
    if (this.state.redirect) {
      const { redirect } = this.state
      this.setState({ redirect: null})
      return <Redirect to={redirect} />
    }
    return (
      <React.StrictMode>
        <Switch>
          <Route exact path="/">
            <Form 
              toggleLoading={this.toggleLoading} 
              toggleSearchLoading={this.toggleSearchLoading} 
              changeURL={this.changeURL}
              changeBody={this.changeBody} 
              changeMethod={this.changeMethod}
              handler={this.handleForm} 
              handelSubmit={this.handelSubmit}
              url={this.state.url}
              method={this.state.method}
              />
            <div className="output-wrapper">
              <History 
                rerun={this.rerun}
                handleHistory={this.handleHistory}
                history={this.state.history}/>
              <Results
                results={this.state.results} 
                searchLoading={this.state.searchLoading}/>
            </div>
          </Route>
          <Route exact path="/history">
            <History
              rerun={this.rerun} 
              handleHistory={this.handleHistory}
              history={this.state.history}/>
              <div>
                <ul>
                  <li>{this.state.method}</li>
                  <li>{this.state.url}</li>
                  <li>{this.state.body}</li>
                </ul>
              </div>
          </Route>
          <Route exact path="/help">
            <Help/>
          </Route>
        </Switch>
      </React.StrictMode> 
    );
  }
}

export default App;
