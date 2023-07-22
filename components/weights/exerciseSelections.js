import React from "react";
import styles from "../../styles/style.module";
import { Pressable, View, ScrollView } from "react-native";
import { TabView, Text } from "@rneui/base";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ availIndex, index, setIndex }) => {
  if (availIndex === 2) {
    return (
      <TabView style={{borderColor: 'red', borderWidth: 3, borderStyle: 'solid'}} value={index} onChange={setIndex} animationType="spring">        
        <TabView.Item style={{ width: "100%"}}>
            <ScrollView>
              {/* guide user to pick 1 chest, back, & shoulder exercise */}
              <Text h3>Day 1</Text>
              <ExerciseItem />
              <ExerciseItem />
              <ExerciseItem />
            </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          {/* guide user to pick 1 core, quad, & hamstring exercise */}
          <ScrollView>
              <Text h3>Day 2</Text>
              <ExerciseItem />
              <ExerciseItem />
              <ExerciseItem />
            </ScrollView>
        </TabView.Item>
      </TabView>
    );
  }

  if (availIndex === 3) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Day 1</Text>
          <View></View>
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
