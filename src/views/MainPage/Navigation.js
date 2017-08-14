import { StackNavigator } from 'react-navigation';

import Home from './../../containers/Home/Home';
import State from './../../containers/State/State';

export const Navigation = StackNavigator({
  Home: { screen: Home },
  State: { screen: State },
});
