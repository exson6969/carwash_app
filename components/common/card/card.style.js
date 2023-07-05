import { StyleSheet } from "react-native";

import { COLORS, FONT,SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer:{
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {

    width: "100%",
    height: "100%",
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name:{
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary
  }
});

export default styles;