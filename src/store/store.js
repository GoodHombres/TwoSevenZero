import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from './../reducers'

// Redux persist config
const config = {
  key: 'root',
  storage,
};

// Persist reducer
const reducer = persistReducer(config, appReducer);

// Create store
const store = createStore(reducer, applyMiddleware(thunk, ( __DEV__ && logger)));

// Persist store
persistStore(store);

export default store;
