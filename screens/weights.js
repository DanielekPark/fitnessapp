import { View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/style.module";
import LiftingQuestionaire from "../components/weights/liftingQuestionaire";
import LiftingOptions from "../components/weights/liftingOptions";
import exercises from "../components/weights/exercises";

function WeightsScreen() {
  const [userData, setUserData] = useState({
    level: ["Beginner", "Intermediate", "Returning user"],
    goals: ["Gain muscle", "Get stronger"],
    availability: [2, 3, 4],
    // levelIndex: '',
    // goalIndex: '',
    // availIndex: '',
    availIndex: 2,
    levelIndex: 'Beginner',
    goalIndex: 'Gain muscle',
    exercises,
    plan: [],
  });

  return (
    // <ScrollView>
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
            />
          ) : (
          /* ======= Displays exercises, user chooses =========*/
            <LiftingOptions
              userData={userData} 
              setUserData={setUserData} />
          )}
        </View>
      </View>
    //  </ScrollView> 
  );
}

export default WeightsScreen;
