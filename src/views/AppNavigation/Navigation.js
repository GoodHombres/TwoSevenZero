import { StackNavigator } from 'react-navigation';

import Start from './../../containers/Start/Start';
import TabBar from './../TabBar/TabBar';

export const Navigation = StackNavigator({
  Start: { screen: Start },
  Main: { screen: TabBar },
});
