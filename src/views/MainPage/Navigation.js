import { StackNavigator } from 'react-navigation';

import Home from './../../containers/Home/Home';
import State from './../../containers/State/State';
import TriviaState from './../../containers/TriviaState/TriviaState';

export const Navigation = StackNavigator({
  Home: { screen: Home },
  State: { screen: State },
  TriviaState: { screen: TriviaState },
});
