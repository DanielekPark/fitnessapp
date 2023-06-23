import { View, Text } from "react-native";
import React, {useState} from "react";
import { Input } from '@rneui/themed';

const Calculator = () => {
  const [weight, setWeight] = useState(0); 

  return (
    <View>
      <Text>Calculator</Text>
      <View>
        <Text>{weight}</Text>
        <View>
          <Input />
        </View>
      </View>
    </View>
  );
};

export default Calculator;