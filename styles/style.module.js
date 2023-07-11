import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* =======================
    Home screen 
    ======================= */
  // IMAGES
  homeImg: {
    height: 120,
    width: "33%",
  },
  homeImgContainer: {
    flexDirection: "row",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  /* =======================
    Button styles
    ======================= */
    activeBtn: {
      backgroundColor: "#33cccc",
      borderWidth: 0,
      borderRadius: 30,
    },
    inactiveBtn: {
      backgroundColor: 'transparent',
      borderColor: "#33cccc",
      borderWidth: 1,
      borderRadius: 30,
    },
    btnContainer: {
      borderColor: 'transparent',
    },
    btnWrapper: {
      marginTop: 4,
      marginBottom: 4,   
    },
  /* =======================
    Font color
    ======================= */
  aqua: {
    color: "#33cccc",
  },
  /* =======================
    Accordion styles
    ======================= */
  accordionFont: {
    fontSize: 23,
  },
  /* =======================
    Spacing
    ======================= */
  smMarTop: {
    marginTop: 15,
  },
  smMarBottom: {
    marginTop: 15,
  },
  /* =======================
    Text styles 
    ======================= */
  centerText: {
    textAlign: "center",
  },
  fontTwenty: {
    fontSize: 20,
  },
  /* =======================
    Calculator styles 
    ======================= */
  calcWrapper: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  inputContainer: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputStyle: {
    textAlign: "center",
  },
  calcBtn: {
    backgroundColor: "#0ff",
    borderRadius: 5,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;