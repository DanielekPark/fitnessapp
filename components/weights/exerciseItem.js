import React from "react";
import { View, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Text, Card, Button, ListItem, Avatar } from "@rneui/themed";
import styles from "../../styles/style.module";

const ExerciseItem = () => {
  return (
    <ListItem bottomDivider>
      <ListItem.CheckBox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checked={true}
      />
      <Avatar
        size="large"
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
      />
      <ListItem.Content>
        <ListItem.Title>Ipsum</ListItem.Title>
        <ListItem.Subtitle>Lorem</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ExerciseItem;
