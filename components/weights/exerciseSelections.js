import React from "react";
import styles from "../../styles/style.module";
import { View, ScrollView, Text} from "react-native";
import { TabView } from "@rneui/base";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ userData, index, setIndex }) => {
  if (userData.availIndex === 2) {
    return (
      <TabView style={{borderColor: 'red', borderWidth: 3, borderStyle: 'solid'}} value={index} onChange={setIndex} animationType="spring">        
        <TabView.Item style={{ width: "100%"}}>
            <ScrollView>
              {/* Guides user to pick 1 chest, back, & shoulder exercise */}
              <Text>Choose 1 chest exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'chest') return <ExerciseItem {...exercise} />
              })}
              <Text>Choose 1 back exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'back') return <ExerciseItem {...exercise} />
              })}
              <Text>Choose 1 shoulder exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'shoulders') return <ExerciseItem {...exercise} />
              })}
            </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <ScrollView>
              {/* Guides user to pick 1 thigh, hamstring, & calf exercise */}
              <Text>Choose 1 thigh exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'thigh') return <ExerciseItem {...exercise} />
                
              })}
              <Text>Choose 1 hamstring exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'hamstring') return <ExerciseItem {...exercise} />
              })}
              <Text>Choose 1 calf exercise</Text>
              {userData.exercises.map((exercise) => {
                if(exercise.muscleGroup === 'calf') return <ExerciseItem {...exercise} />
              })}
            </ScrollView>
        </TabView.Item>
      </TabView>
    );
  }

  if (userData.availIndex === 3) {
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

  if (userData.availIndex === 4) {
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
