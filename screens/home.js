import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "../components/calculator/calculator";

const Tab = createBottomTabNavigator();
// 2. set up home screen include calculator
// 2a. select workout intermediate
//2b. route to cardio/weights/stretching
//3. Create sections of beginner 2-3 days
//3. Create section for muscle groups (e.g. chest, abs, legs etc)
//3b. create section for intermediate same as above
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* Tutorial/instructions */}

      {/* Calculator */}

      {/* Workout option days-
        routes to screeens
      */}
    </View>
    );
  
}

export default HomeScreen;
