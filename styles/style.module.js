import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /* =======================
    Accordion styles
    ======================= */
  accordionFont: {
    fontSize: 23
  },
    /* =======================
    Spacing
    ======================= */
    smMarTop: {
      marginTop: 15
    },
    smMarBottom: {
      marginTop: 15
    },
    /* =======================
    Text styles 
    ======================= */
  centerText: {
    textAlign: 'center'
  },
  fontTwenty: {
    fontSize: 20
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
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 5,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default styles;
