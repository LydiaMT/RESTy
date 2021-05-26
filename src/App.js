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
    }
  }
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (header, count, results ) => {
    this.setState({ header, count, results });
  }

  toggleSearchLoading = () => {
    this.setState({ searchLoading: !this.state.searchLoading})
  }
  
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm} toggleSearchLoading={this.toggleSearchLoading}/>
        <div className="output-wrapper">
          <History />
          <Results header={this.state.header} results={this.state.results}searchLoading={this.state.searchLoading}/>
        </div>
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
