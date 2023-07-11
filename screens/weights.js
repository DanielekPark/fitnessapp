import { View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Text } from "@rneui/base";
import styles from "../styles/style.module";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    level: ["Beginner", "Intermediate", "Returning user"],
    levelIndex: "",
    goals: ["Gain muscle", "Get stronger"],
    goalIndex: "",
    availability: [2, 3, 4],
    availIndex: "",
  });

  // updates user input on button presses
  const updateUserData = (value, key) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View>
          {/* ======= Dumbbell Image =========*/}
          <View style={styles.homeImgContainer}>
            <Image
              source={require("../assets/dumbbell.png")}
              style={styles.homeImg}
            />
          </View>
        </View>
        <View style={styles.smMarBottom}>
          <View>
            <View>
              <View>
                <Text
                  style={[
                    styles.fontTwenty,
                    styles.centerText,
                    styles.smMarBottom,
                    styles.smMarTop,
                    styles.aqua
                  ]}
                >
                  Choose your level
                </Text>
              </View>
              <View>
                <View>
                  <ButtonGroup
                    buttons={userData.level}
                    onPress={(value) => updateUserData(value, "levelIndex")}
                    selectedIndex={userData.levelIndex}
                    containerStyle={styles.btnContainer}
                    selectedButtonStyle={styles.activeBtn}
                    buttonStyle={styles.inactiveBtn}
                    innerBorderStyle={styles.transparentBtn}
                    buttonContainerStyle={styles.btnWrapper}
                    textStyle={styles.aqua}
                    vertical
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={[
                    styles.fontTwenty,
                    styles.centerText,
                    styles.smMarBottom,
                    styles.smMarTop,
                    styles.aqua
                  ]}
                >
                  Exercise goals
                </Text>
              </View>
              <View>
                <View>
                  <ButtonGroup
                    buttons={userData.goals}
                    onPress={(value) => updateUserData(value, "goalIndex")}
                    selectedIndex={userData.goalIndex}
                    containerStyle={styles.btnContainer}
                    selectedButtonStyle={styles.activeBtn}
                    buttonStyle={[styles.inactiveBtn, styles.aqua]}
                    innerBorderStyle={styles.transparentBtn}
                    buttonContainerStyle={styles.btnWrapper}
                    textStyle={styles.aqua}
                    vertical
                  />
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={[
                    styles.fontTwenty,
                    styles.centerText,
                    styles.smMarBottom,
                    styles.smMarTop,
                    styles.aqua
                  ]}
                >
                Days available per week 
                </Text>
              </View>
              <View>
                <View>
                  <ButtonGroup
                    buttons={userData.availability}
                    selectedIndex={userData.availIndex}
                    onPress={(value) => updateUserData(value, "availIndex")}
                    containerStyle={styles.btnContainer}
                    selectedButtonStyle={styles.activeBtn}
                    buttonStyle={styles.inactiveBtn}
                    buttonContainerStyle={styles.btnWrapper}
                    innerBorderStyle={styles.transparentBtn}
                    textStyle={styles.aqua}
                    vertical
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
    </ScrollView>
  );
}

export default WeightsScreen;
