import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import WeightsScreen from "./weights";
import CardioScreen from "./cardio";
import CalculatorScreen from "./calculator";
import StretchingScreen from "./stretch";

const Tab = createBottomTabNavigator();

function ActiveScreen() {
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

export default ActiveScreen;
