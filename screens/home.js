import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
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

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
        {/* Place logo here? */}
        
        {/* Tutorial/instructions */}
        <View style={{ width: "95%" }}>
          <ListItem.Accordion
            onPress={() => toggleTab("Tutorial")}
            isExpanded={tabs[0].isOpen}
            content={
              <ListItem.Title style={{ width: "90%" }}>Tutorial</ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <View>
                <Text>Tutorial</Text>
              </View>
            </ListItem>
          </ListItem.Accordion>

          {/* Calculator */}
          <ListItem.Accordion
            onPress={() => toggleTab("Calculator")}
            isExpanded={tabs[1].isOpen}
            content={
              <ListItem.Title style={{ width: "90%" }}>
                Calculator
              </ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <Calculator />
            </ListItem>
          </ListItem.Accordion>

          {/* Tips */}
          <ListItem.Accordion
            onPress={() => toggleTab("Tips")}
            isExpanded={tabs[2].isOpen}
            content={
              <ListItem.Title style={{ width: "90%" }}>Tips</ListItem.Title>
            }
            topDivider
            bottomDivider
          >
            <ListItem>
              <View>
                <Text>Tips</Text>
              </View>
            </ListItem>
          </ListItem.Accordion>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
