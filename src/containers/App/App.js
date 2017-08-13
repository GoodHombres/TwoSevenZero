import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

// Store
import store from './../../store/store';

// Views
import Wrapper from './../Wrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Provider store={store}>
          <Wrapper />
        </Provider>
      </NativeRouter>
    );
  }
}

export default App;
