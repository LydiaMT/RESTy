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
      header: {},
      results: [],
      url: '',
      method: '',
      body:'',
      history: [],
      outputLoad: false,
      redirect: null,
      error: '',
    }
  }
  
  componentDidMount(){
    const history = JSON.parse(localStorage.getItem("history"))
    if(history){
      this.setState({ history })
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  toggleSearchLoading = () => {
    this.setState({ searchLoading: !this.state.searchLoading})
  }
  
  handleError = (message) => {
    this.setState({ error: message })
  }

  changeURL = e => {
    let url = e.target.value;
    this.setState({ url })
  }

  changeBody = e => {
    let body = e.target.value || ''
    this.setState({ body })
  }

  changeMethod = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  handleDemo = e => {
    e.preventDefault()
    let method = 'GET'
    let url = 'https://swapi.dev/api/people/'
    this.setState({ url, method })
  }

  handelSubmit = async e => {
    if(e) e.preventDefault();
    if(this.state.method === ''){
      alert("Please select a method: GET, POST, PUT, or DELETE")
      return
    }
    this.toggleSearchLoading()
    const { method, url, body } = this.state // pulling keys off state object
    let data 
    try { 
      data = await axios({ method, url, data: body }) 
      if(data.data){ 
        let results = data.data 
        let header = data.headers
        if(results.body !== ""){ // if the results has a body
          this.setState({ results , header, error: '' });  // update results, header and maintain the no error state
        }
      }
      this.updateHistory({method, url, body})  
    } catch(err) {
      console.error("Something went wrong", err)
      this.handleError({ error: err.message }) // if there's an error, trigger handleError and pass the error message
    }
    this.toggleSearchLoading()
    this.toggleLoading()
  }

  updateHistory = item => {
    this.setState({ history: [...this.state.history, item] })
    localStorage.setItem("history", JSON.stringify(this.state.history))
  }

  handleHistory = (idx) => { 
    return (_event) => {
      const { method, url, body } = this.state.history[idx]
      this.setState({ method, url , body})
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
              handleError={this.handleError}
              handleDemo={this.handleDemo}
              />
            <div className="parent-wrapper">
              <div className="output-wrapper">
                <History 
                  rerun={this.rerun}
                  handleHistory={this.handleHistory}
                  history={this.state.history}/>
                <Results
                  handelSubmit={this.handelSubmit}
                  results={this.state.results} 
                  header={this.state.header}
                  error={this.state.error}
                  searchLoading={this.state.searchLoading}/>
              </div>
            </div>
          </Route>
          <Route exact path="/history">
            <div className="output-wrapper">
              <History
                rerun={this.rerun} 
                handleHistory={this.handleHistory}
                history={this.state.history}/>
                <div className="output">
                <h3>Click the text of your past queries to retrieve the metadata</h3>
                  <ul>
                    <li><h4>Method</h4> <p>{this.state.method}</p></li>
                    <li><h4>URL</h4> <p>{this.state.url}</p></li>
                    <li><h4>Body</h4> <p>{this.state.body}</p></li>
                  </ul>
                </div>
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
