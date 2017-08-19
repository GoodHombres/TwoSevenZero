import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Persistor } from 'redux-persist';

import { StackNavigation } from 'react-navigation';
// Store
import store from './../../store/store';

// Views
import Loading from './../Loading/Loading';
// import NavigationState from './../Navigation/Navigation';
import AppNavigation from './../../views/AppNavigation/AppNavigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: true,
    };
  }

  storeObserver;

  componentDidMount() {
    // this.storeObserver = store.subscribe(() => {
    //   const { ready } = this.state;

    //   if (!ready && store.getState()._persist.rehydrated) {
    //     this.setState({ ready: true });
    //   }
    // });
  }

  componentWillUnmount() {
    // this.storeObserver.unsubscribe();
  }

  render() {
    const { ready } = this.state;

    return ready ? (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    ) : (<Loading />);
  }
}

export default App;
