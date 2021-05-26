import React from 'react';
import Header from './components/header/header'
import Form from './components/form/form'
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
    }
  }
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (header, count, results ) => {
    this.setState({ header, count, results });
  }
  
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <Results header={this.state.header} results={this.state.results}/>
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
