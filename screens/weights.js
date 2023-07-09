import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {ButtonGroup} from "@rneui/base";

function WeightsScreen() {
  const [userData, setUserData] = useState(
    {
      level: ['beginner', 'intermediate', 'Returning user'],
      levelIndex: '',
      goals: ['Gain muscle', 'Get stronger'],
      goalIndex: '',
      availability: [2, 3, 4],
      availIndex: '',
    }); 

    // updates user input on button presses
    const updateUserData = (value, key) => {
      setUserData({...userData, [key]: value}); 
    }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <Text>Weight Lifting</Text>
      </View>
      <View>
        <View>
          <View>
            <View>
              <Text>Choose your level</Text>
            </View>
            <View>
              <View>
                <ButtonGroup 
                  buttons={userData.level}
                  onPress={(value) => updateUserData(value, 'levelIndex')}
                  selectedIndex={userData.levelIndex}
                />
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Exercise goals</Text>
            </View>
            <View>
              <View>
                <ButtonGroup 
                  buttons={userData.goals}
                  onPress={(value) => updateUserData(value, 'goalIndex')}
                  selectedIndex={userData.goalIndex}
                />
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Available number of days to workout</Text>
            </View>
            <View>
              <View>
                <ButtonGroup
                  buttons={userData.availability}
                  selectedIndex={userData.availIndex}
                  onPress={(value) => updateUserData(value, 'availIndex')}
                />
              </View>
            </View>
          </View>
        </View>
        {/* Workout option

        //2. Create section for muscle groups (choose chest, abs, leg, lower or abs)
        //exercise buttons show exercise picture
        //2a. user chooses exercises
        //2c. user provides data from previous workout and selects exercises from previous workout
        //2d. or user can create a new workout, and then follows step 2
        //3. workout schedule is provided after data submission
      */}
      </View>
    </View>
  );
}

export default WeightsScreen;
