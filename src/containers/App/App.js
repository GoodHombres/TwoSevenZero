import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

// Store
import store from './../../store/store';

// Views
import Main from './../Main/Main';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </NativeRouter>
    );
  }
}

export default App;
