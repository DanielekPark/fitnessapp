import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import WeightsScreen from "./weights";
import CardioScreen from "./cardio";
import StretchingScreen from "./stretch";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

function ActiveScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Icon name="home" /> }}
      />
      <Tab.Screen
        name="Weights"
        component={WeightsScreen}
        options={{ tabBarIcon: () => <Icon name="dumbbell" /> }}
      />
      <Tab.Screen
        name="Cardio"
        component={CardioScreen}
        options={{ tabBarIcon: () => <Icon name="bike-fast" /> }}
      />
      <Tab.Screen
        name="Stretch"
        component={StretchingScreen}
        options={{ tabBarIcon: () => <Icon name="human-handsup" /> }}
      />
    </Tab.Navigator>
  );
}

export default ActiveScreen;
