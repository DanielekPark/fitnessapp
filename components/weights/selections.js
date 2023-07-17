import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";
import { Button, Tab, TabView } from "@rneui/base";
import TabBtns from "./tabBtns";

const Selections = ({
  level,
  levelIndex,
  goals,
  goalIndex,
  availability,
  availIndex,
  userData,
  setUserData,
}) => {
  const [index, setIndex] = useState(0);

  return (
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
            Choose your exercises
          </Text>
        </View>
      </View>
      <View style={styles.smMarBottom}>
        <Button
          title="Start Over"
          type="outline"
          raised
          titleStyle={styles.aqua}
          containerStyle={styles.btnTitleContain}
          onPress={() =>
            setUserData({
              ...userData,
              levelIndex: "",
              goalIndex: "",
              availIndex: "",
            })
          }
        />
      </View>
      {/* ======= Exercises tab selection ======== */}
      <View style={styles.smMarTop}>
        <View>
          <TabBtns availIndex={availIndex} index={index} setIndex={setIndex} />
        </View>
        <View
          style={{
            height: 200,
            borderColor: "black",
            borderWidth: 3,
          }}
        >
          {/* show days based on user selection */}
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
          </TabView>
        </View>
      </View>
    </View>
  );
};

export default Selections;
