import { StackNavigator } from 'react-navigation';

import Profile from './../../containers/Profile/Profile';

export const Navigation = StackNavigator({
  Profile: { screen: Profile },
});
