import React, { useState } from "react";
import { View, Text } from "react-native";
import { ButtonGroup } from "@rneui/themed";
import styles from "../../styles/style.module";

const LiftingQuestionaire = (props) => {
  const {userData, setUserData, updateUserData} = props; 

  return (
      <View style={[styles.smMarBottom, styles.screenWidth]}>
        <View>
          <View>
            <View>
              <Text
                style={[
                  styles.fontTwenty,
                  styles.centerText,
                  styles.smMarBottom,
                  styles.smMarTop,
                  styles.aqua,
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
                  styles.aqua,
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
                  styles.aqua,
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
  );
};

export default LiftingQuestionaire;
