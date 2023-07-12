import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";
import { Button } from "@rneui/base";

const Selections = (props) => {
  const {
    level,
    levelIndex,
    goals,
    goalIndex,
    availability,
    availIndex,
    userData,
    setUserData,
  } = props;

  return (
    <View>
      <Text>Choose your exercises</Text>
      <Button
        title="Start Over"
        buttonStyle={{
          borderColor: "rgba(78, 116, 289, 1)",
        }}
        type="outline"
        raised
        titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => setUserData({...userData, levelIndex: "", goalIndex: "", availIndex: ""})}
      />
    </View>
  );
};

export default Selections;
