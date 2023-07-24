import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/style.module";
import { Button } from "@rneui/base";
import TabBtns from "./tabBtns";
import ExerciseSelections from "./exerciseSelections";

const LiftingOptions = ({ userData, setUserData}) => {
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
      <View style={styles.smMarTop}>
        <View>
        {/* ======= Exercises tab selection ======== */}
          <TabBtns 
            userData={userData}
            index={index} 
            setIndex={setIndex} />
        </View>
        <View
          style={{
            height: 350,
            borderColor: "black",
            borderWidth: 3,
          }}
        >
          {/* Show exercises */}
          <ExerciseSelections 
            userData={userData} 
            setUserData={setUserData} 
            index={index} 
            setIndex={setIndex} />
        </View>
      </View>
    </View>
  );
};

export default LiftingOptions;
