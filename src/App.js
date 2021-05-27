import React from 'react';
import Header from './components/header/header'
import Form from './components/form/form'
import History from './components/history/history'
import Results from './components/results/results'
import Footer from './components/footer/footer'
import axios from 'axios'

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
        <Header />
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
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
