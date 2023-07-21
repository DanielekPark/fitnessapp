import React from "react";
import styles from "../../styles/style.module";
import { Tab } from "@rneui/base";

const TabBtns = ({ availIndex, index, setIndex }) => {
  if (availIndex === 2) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={styles.aquaBg}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Upper"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Lower"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
      </Tab>
    );
  }

  if (availIndex === 3) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
      </Tab>
    );
  }

  if (availIndex === 4) {
    return (
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "timer", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: "heart", type: "ionicon", color: "white" }}
        />
      </Tab>
    );
  }
};

export default TabBtns;
