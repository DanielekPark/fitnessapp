import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// import screens

function Nav() {
    /* 
    1. calculator
    2. weights
    3. cardio
    4. stretching
    5. tips
  */
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


export default Nav;
