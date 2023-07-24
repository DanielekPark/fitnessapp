import React from "react";
import styles from "../../styles/style.module";
import { View, ScrollView, Text } from "react-native";
import { TabView } from "@rneui/base";
import ExerciseItem from "./exerciseItem";

const ExerciseSelections = ({ userData, setUserData, index, setIndex }) => {
  if (userData.availIndex === 2) {
    return (
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            {/* Guides user to pick 1 exercise per muscle group */}
            <Text>Choose 1 chest exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "chest")
                return (
                  <ExerciseItem
                    key={`${exer.name + idx}`}
                    userData={userData}
                    setUserData={setUserData}
                    exer={exer}
                  />
                );
            })}
            <Text>Choose 1 back exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "back")
                return (
                  <ExerciseItem
                    key={`${exer.name + idx}`}
                    userData={userData}
                    setUserData={setUserData}
                    exer={exer}
                  />
                );
            })}
            <Text>Choose 1 shoulder exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "shoulders")
                return (
                  <ExerciseItem
                    key={`${exer.name + idx}`}
                    userData={userData}
                    setUserData={setUserData}
                    exer={exer}
                  />
                );
            })}
          </ScrollView>
          {/* when user wants to preview a workout, hide scrollview 
              <View>
                <WorkoutPlan />
              </View>  
            */}
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "yellow", width: "100%" }}>
          <ScrollView>
            <Text>Choose 1 thigh exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "thigh")
                return (
                  <ExerciseItem
                    userData={userData}
                    setUserData={setUserData}
                    key={`${exer.name + idx}`}
                    exer={exer}
                  />
                );
            })}
            <Text>Choose 1 hamstring exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "hamstring")
                return (
                  <ExerciseItem
                    userData={userData}
                    setUserData={setUserData}
                    key={`${exer.name + idx}`}
                    exer={exer}
                  />
                );
            })}
            <Text>Choose 1 calf exercise</Text>
            {userData.exercises.map((exer, idx) => {
              if (exer.muscleGroup === "calf")
                return (
                  <ExerciseItem
                    userData={userData}
                    setUserData={setUserData}
                    key={`${exer.name + idx}`}
                    exer={exer}
                  />
                );
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
