import React from "react";
import { Pressable } from "react-native";
import { Text, Card, Button, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = ({ exer, setUserData, userData }) => {
  const handlePress = (exer) => {
    //Returns 1 if an exercise that targets the same muscle group was previously selected
    const muscleTypeAmount = userData.plan.reduce((list, item) => {
      if (item.muscleGroup === exer.muscleGroup) {
        list += 1;
      }
      return list;
    }, 0);

    //Tracks user's choices of exercises
    const updateList = userData.exercises.map((item) => {
      if (item.muscleGroup === exer.muscleGroup) {
        if (exer.name === item.name) {
          return { ...item, chosen: !item.chosen };
        }
      }
      return item;
    });
    setUserData({ ...userData, exercises: updateList });
  };
  //create copy of exercises and update hook

  return (
    // Add css opacity if selected
    <Pressable
      style={exer.chosen ? styles.selected : {}}
      onPress={() => handlePress(exer)}
    >
      <ListItem bottomDivider>
        {/* <ListItem.CheckBox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
        /> */}
        <Avatar
          size="large"
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <ListItem.Content>
          <ListItem.Title>{exer.name}</ListItem.Title>
          <ListItem.Subtitle>
            Primary muscle group: {exer.muscleGroup}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </Pressable>
  );
};

export default ExerciseItem;
