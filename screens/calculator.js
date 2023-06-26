import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "../components/calculator/calculator";
import { Input, Icon, Button } from "@rneui/themed";

// 2. set up home screen include calculator
// 2a. select workout intermediate
//2b. route to cardio/weights/stretching
//3. Create sections of beginner 2-3 days
//3. Create section for muscle groups (e.g. chest, abs, legs etc)
//3b. create section for intermediate same as above

function CalculatorScreen() {
  const [fitData, setFitData] = useState({
    weight: "",
    reps: "",
    oneRepMax: "",
    showResult: false,
  });

  //Calculates recommended weight based on weight & repetitions data
  const calcStrength = () => {
    const weight = fitData.weight / 1;
    const repetitions = fitData.reps / 1;
    if (!weight || weight < 7) return;
    if (!repetitions) return;
    if (repetitions < 1 || repetitions > 15) return;
    const oneRepMax = Math.round(weight / (1.0287 - 0.0278 * repetitions));

    setFitData({ ...fitData, reps: repetitions });
    setFitData({ ...fitData, weight: weight });
    setFitData({ ...fitData, oneRepMax: `${oneRepMax}` });
  };

  useEffect(() => {
    console.log(fitData);
  }, [fitData])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calculator Screen</Text>
      <View>
        <Text>Estimated 1 repetition max {fitData.oneRepMax ? fitData.oneRepMax : ''}</Text>
        <View>
          <Input
          inputMode="numeric"
            maxLength={3}
            placeholder="Estimated weight"
            onChangeText={(value) => setFitData({ ...fitData, weight: value })}
          />
          <Input
            inputMode="numeric"
            maxLength={2}
            placeholder="Reps completed"
            onChangeText={(value) => setFitData({ ...fitData, reps: value })}
          />
          <Button
            title="Calculate"
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={calcStrength}
          />
        </View>
      </View>
    </View>
  );
}

export default CalculatorScreen;
