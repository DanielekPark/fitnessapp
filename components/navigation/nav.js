import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../screens/home";
import WeightsScreen from "../../screens/weights";
import CardioScreen from "../../screens/cardio";
import CalculatorScreen from "../../screens/calculator";
import StretchingScreen from "../../screens/stretch";

const Tab = createBottomTabNavigator();

function Nav() {
    /* 
    1. calculator/home/tips/tutorial
    2. weights
    3. cardio
    4. stretching
  */

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stretch" component={StretchingScreen} />
      <Tab.Screen name="Cardio" component={CardioScreen} />
      <Tab.Screen name="Weights" component={WeightsScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
}

export default Nav;