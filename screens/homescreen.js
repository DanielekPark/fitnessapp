import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// import screens
function HomeScreen() {
  /* 
    1. calculator/home/tips/tutorial
    2. weights
    3. cardio
    4. stretching
  */
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  
}

export default HomeScreen;
