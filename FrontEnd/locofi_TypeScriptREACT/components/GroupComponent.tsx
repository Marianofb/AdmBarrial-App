import React, { useMemo } from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type GroupComponentType = {
  publicar?: string;

  /** Style props */
  propMarginLeft?: number | string;
  propTop?: number | string;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  publicar,
  propMarginLeft,
  propTop,
  onGroupPressablePress,
}: GroupComponentType) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propMarginLeft, propTop]);

  return (
    <Pressable
      style={[
        styles.wishlistParent,
        styles.wishlistLayout,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.wishlist, styles.wishlistLayout]}>
        <View style={styles.icons}>
          <View style={styles.cart}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <View style={[styles.home, styles.homeSpaceBlock]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
          </View>
          <View style={[styles.account, styles.homeSpaceBlock]}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.publicar}>{publicar}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wishlistLayout: {
    height: 59,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  cart: {
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  home: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.neutral50,
    display: "none",
  },
  userIcon: {
    display: "none",
  },
  account: {
    width: 36,
    height: 36,
  },
  icons: {
    display: "none",
    flexDirection: "row",
  },
  wishlist: {
    marginLeft: -80.05,
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.neutral900,
    padding: Padding.p_base,
  },
  publicar: {
    top: 13,
    left: 40,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    lineHeight: 30,
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.neutral50,
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
    width: 82,
    height: 34,
    position: "absolute",
  },
  wishlistParent: {
    marginLeft: 9.5,
    top: 636,
  },
});

export default GroupComponent;
