import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import app from './containers/App/index';

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path="/" component={app}/>
              </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
