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
      count: 0,
      results: []      
    }
  }
  
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }
  
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm} />
        <Results people={this.state.results}/>
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
