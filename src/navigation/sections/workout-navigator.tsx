import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home as HomeIcon, Settings} from 'ui';
import {SvgProps} from 'react-native-svg';
import {WorkoutHome} from 'screens/workout';
const Tab = createBottomTabNavigator();

const getRouteIcon = (
  routeName: string,
): (({color, ...props}: SvgProps) => JSX.Element) => {
  let Icon = HomeIcon;
  switch (routeName) {
    case 'Home':
      Icon = HomeIcon;
      break;
    case 'Style':
      Icon = Settings;
      break;
  }

  return Icon;
};

export const WorkoutNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const Icon = getRouteIcon(route.name);
          return <Icon color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={WorkoutHome} />
    </Tab.Navigator>
  );
};
