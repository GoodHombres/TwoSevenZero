import { StackNavigator } from 'react-navigation';

import Home from './../../containers/Home/Home';
import TriviaState from './../../containers/TriviaState/TriviaState';
import TriviaLevel from './../../containers/TriviaLevel/TriviaLevel';
import Profile from './../../containers/Profile/Profile';

export const Navigation = StackNavigator({
  Home: { screen: Home },
  TriviaState: { screen: TriviaState },
  TriviaLevel: { screen: TriviaLevel },
  Profile: { screen: Profile },
});
