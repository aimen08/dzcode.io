import { StyleSheet } from "react-native";

import { LARGE_TEXT_SIZE } from "../utils/constants";

export const globalStyles = StyleSheet.create({
  // views
  mainView: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexView1: {
    flex: 1,
  },
  flexView2: {
    flex: 2,
  },
  flexView3: {
    flex: 3,
  },
  flexView4: {
    flex: 4,
  },
  flexView5: {
    flex: 5,
  },
  flexView6: {
    flex: 6,
  },
  flexView7: {
    flex: 7,
  },
  flexView15: {
    flex: 1.5,
  },
  flexView25: {
    flex: 2.5,
  },
  // texts
  titleText: {
    fontSize: LARGE_TEXT_SIZE,
    fontWeight: "600",
  },
});
