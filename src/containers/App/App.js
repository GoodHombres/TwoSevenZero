import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { Persistor } from 'redux-persist';

// Store
import store from './../../store/store';

// Views
import Loading from './../Loading/Loading';
import Wrapper from './../Wrapper/Wrapper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  storeObserver;

  componentDidMount() {
    this.storeObserver = store.subscribe(() => {
      const { ready } = this.state;

      if (!ready && store.getState()._persist.rehydrated) {
        this.setState({ ready: true });
      }
    });
  }

  componentWillUnmount() {
    this.storeObserver.unsubscribe();
  }

  render() {
    const { ready } = this.state;

    return ready ? (
      <NativeRouter>
        <Provider store={store}>
          <Wrapper />
        </Provider>
      </NativeRouter>
    )
    : (<Loading />);
  }
}

export default App;
