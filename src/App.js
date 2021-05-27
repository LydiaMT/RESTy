import React from 'react';
import Header from './components/header/header'
import Form from './components/form/form'
import History from './components/history/history'
import Results from './components/results/results'
import Footer from './components/footer/footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      header: {},
      count: 0,
      results: [],
      searchLoading: false,
      url: '',
      method: '',
      history: []
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
    this.setState({ history: [...this.state.history] })
  }

  handelClick = e => {
    e.preventDefault();
    let method = e.target.value
    this.setState({ method })
  }

  handelSubmit = async e => {
    e.preventDefault();

    // this.setState({ history: [...this.state.history, { url, method }] })
    this.toggleSearchLoading()
    let raw = await fetch(this.state.url);
    let data = await raw.json();
    let header = raw.headers
    let count = data.count
    let results = data.results
    this.setState({ header, count, results });
    this.toggleSearchLoading()
    this.toggleLoading()
    let history = this.state.history
    history.push(`${this.state.method} ${this.state.url}`)
    // console.log(history)
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
          handelSubmit={this.handelSubmit}/>
        <div className="output-wrapper">
          <History 
            history={this.state.history}/>
          <Results 
            header={this.state.header} 
            results={this.state.results} 
            searchLoading={this.state.searchLoading}/>
        </div>
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
