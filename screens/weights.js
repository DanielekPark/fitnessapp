import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "../components/calculator/calculator";

const Tab = createBottomTabNavigator();

function WeightsScreen() {
  return (
    <View styles={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>Weight Lifting</Text>
      </View>
      <View>
      {/* Workout option
        //1. Create sections choose either beginner or intermediate & 2,3,4 days available
        //2. Create section for muscle groups (based on days available choose chest, abs, leg, lower or abs)
        //2a. user chooses exercises
        //2b. create section for intermediate
        //2c. user provides data from previous workout 
        //2d. or user can create a new workout, and then follows step 2
        //3. workout schedule is provided after data submission
      */}

      </View>


    </View>
  );
}

export default WeightsScreen;
