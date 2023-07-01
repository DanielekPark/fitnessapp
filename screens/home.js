import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "../components/calculator/calculator";
import { ListItem } from "@rneui/themed";

function HomeScreen() {
  const [tabs, setTabs] = useState([
    {
      title: "Tutorial",
      isOpen: false,
    },
    {
      title: "Calculator",
      isOpen: false,
    },
    {
      title: "Tips",
      isOpen: false,
    },
  ]);

  //Collapses or expands tab when pressed
  const toggleTab = (pressed) => {
    const findTab = tabs.map((tab) => {
      if (tab.title === pressed) {
        return { ...tab, isOpen: !tab.isOpen };
      }
      return { ...tab };
    });
    setTabs(findTab);
  };

  useEffect(() => {
    console.log(tabs[1]);
  }, [tabs]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* Tutorial/instructions */}

      <View>
        <ListItem>
          <ListItem.Accordion
            onPress={() => toggleTab("Tutorial")}
            isExpanded={tabs[0].isOpen}
            content={<Text>Tutorial</Text>}
          ></ListItem.Accordion>
        </ListItem>
        <ListItem>
          <ListItem.Accordion
            content={<Text>Calculator</Text>}
            onPress={() => toggleTab("Calculator")}
            isExpanded={tabs[1].isOpen}
          ></ListItem.Accordion>
        </ListItem>
        <ListItem>
          <ListItem.Accordion
            onPress={() => toggleTab("Tips")}
            isExpanded={tabs[2].isOpen}
            content={<Text>Tips</Text>}
          ></ListItem.Accordion>
        </ListItem>
      </View>
    </View>
  );
}

export default HomeScreen;