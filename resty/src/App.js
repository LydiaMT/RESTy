import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Form from './components/form/form'

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Header />
        <Form />
        <Footer />
      </React.StrictMode> 
    );
  }
}

export default App;
