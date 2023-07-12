import { View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../styles/style.module";
import LiftingQuestionaire from "../components/weights/liftingquestionaire";
import Selections from "../components/weights/selections";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    level: ["Beginner", "Intermediate", "Returning user"],
    levelIndex: '',
    goals: ["Gain muscle", "Get stronger"],
    goalIndex: '',
    availability: [2, 3, 4],
    availIndex: '',
  });

  //sets users preferences by button presses
  const updateUserData = (value, key) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <View>
          {/* ======= Dumbbell Image =========*/}
          <View style={styles.homeImgContainer}>
            <Image
              source={require("../assets/dumbbell.png")}
              style={styles.homeImg}
            />
          </View>
        </View>
        <View style={styles.smMarBottom}>
          {/* ======= Weight lifting questionaire =========*/}
          {userData.levelIndex === "" || userData.goalIndex === "" || userData.availIndex === "" ?
          (<LiftingQuestionaire
              userData={userData}
              setUserData={setUserData}
              updateUserData={updateUserData}
            />
          ) : (
            /* ======= User chooses exercises =========*/
            <Selections userData={userData} setUserData={setUserData} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default WeightsScreen;
