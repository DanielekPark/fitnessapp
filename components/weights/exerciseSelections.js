import React from "react";
import styles from "../../styles/style.module";
import { Pressable } from "react-native";
import { TabView, Card } from "@rneui/base";
import ExerciseCard from "./exerciseCard";

const ExerciseSelections = ({ availIndex, index, setIndex }) => {
  if (availIndex === 2) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{  width: "100%" }}>
          <View> 
            <Text h1>Day 1</Text>
          </View>

        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <Text h1>Day 2</Text>
        </TabView.Item>
      </TabView>
    );
  }

  if (availIndex === 3) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Day 1</Text>
          <View>

          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <Text h1>Day 2</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Day 3</Text>
        </TabView.Item>
      </TabView>
    );
  }

  if (availIndex === 4) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Day 1</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <Text h1>Day 2</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Day 3</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <Text h1>Day 4</Text>
        </TabView.Item>
      </TabView>
    );
  }
};

export default ExerciseSelections;
