import { View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import LiftingQuestionaire from "../components/weights/liftingquestionaire";
import Selections from "../components/weights/selections";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    level: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    availability: [2, 3, 4],
    levelIndex: '',
    goalIndex: '',
    availIndex: '',
    // availIndex: 2,
    // levelIndex: 'Beginner',
    // goalIndex: 'Gain muscle',
  });

  //sets users preferences by button presses
  const updateUserData = (value, key) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <ScrollView>
      <View style={[styles.screenWrapper]}>
        <View style={styles.topImgWrap}>
          {/* ======= Dumbbell Image =========*/}
          <View>
            <Image
              source={require("../assets/dumbbell.png")}
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
            <Selections 
              {...userData} 
              setUserData={setUserData} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default WeightsScreen;
