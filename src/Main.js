import React from 'react';
import Header from './components/header/header'
import App from './App.js'
import History from './components/history/history'
import Help from './components/help/help'
import Footer from './components/footer/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Main = () => {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/">
                <App/>
              </Route>
              <Route exact path="/History">
                <History/>
              </Route>
              <Route exact path="/Help">
                <Help/>
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </React.StrictMode> 
    );
}


export default Main
