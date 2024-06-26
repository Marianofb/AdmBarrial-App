import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TextInput,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type InputsType = {
  eye?: ImageSourcePropType;
  placeholder?: string;
  eye1?: ImageSourcePropType;
  showEyeIcon?: boolean;
  propMarginTop?: number | string;

  /** New Props for handling input */
  value?: string;
  onChangeText?: (text: string) => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Inputs = ({
  eye,
  placeholder,
  eye1,
  showEyeIcon,
  propMarginTop,
  value,
  onChangeText,
}: InputsType) => {
  const inputsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.inputs, inputsStyle]}>
      <View style={styles.eyeParent}>
        <Image style={styles.eyeIconLayout} resizeMode="cover" source={eye} />
        <TextInput
          style={styles.placeholder}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {showEyeIcon && (
        <Image
          style={[styles.eyeIcon1, styles.eyeIconLayout]}
          resizeMode="cover"
          source={eye1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIconLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  placeholder: {
    flex: 1,
    fontSize: FontSize.bodyMediumRegular_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.neutral600,
    textAlign: "justify",
    marginLeft: 8,
  },
  eyeParent: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs: {
    borderRadius: Border.br_base,
    backgroundColor: Color.neutral50,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 344,
    padding: Padding.p_base,
    flexDirection: "row",
  },
});

export default Inputs;
