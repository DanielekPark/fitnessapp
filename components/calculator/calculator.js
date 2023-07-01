import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Input, Icon, Button } from "@rneui/themed";

function Calculator() {
  const [fitData, setFitData] = useState({
    weight: "",
    reps: "",
    oneRepMax: "",
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Calculator</Text>
      <View>
        <Text>{fitData.oneRepMax ? `Estimated 1 repetition max ${fitData.oneRepMax}` : ''}</Text>
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

export default Calculator;