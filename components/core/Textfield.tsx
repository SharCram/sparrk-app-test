import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { styled } from "nativewind";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledButton = styled(TouchableRipple);

type textFieldProps = {
  label: String;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
};

const Textfield = ({ label, leftIcon, rightIcon, disabled }: textFieldProps) => {
  const [text, setText] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  const clearTextField = () => {
    setText("");
  };

  return (
    // TODO: implement animation for floating label
    <StyledView
      className={`h-[52px] w-full gap-2 px-[14px] flex-row items-center ${disabled ? 'bg-background-color-primary' : 'bg-background-color-secondary'} border-[1px] border-border-primary rounded-[6px] relative`}
    >
      {leftIcon && <StyledText className={disabled && 'text-text-disable'}>{leftIcon}</StyledText>}
      <StyledView className="w-full">
        <StyledTextInput
          className="text-[16px] peer font-bold"
          onChangeText={(e) => setText(e)}
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
        <StyledText
          className={` absolute ${
            isFocused || text != ""
              ? "-top-3.5 text-[12px] text-text-secondary"
              : "top-0 text-[16px]"
          } ${disabled && 'text-text-disable'}`}
        >
          {label}
        </StyledText>
      </StyledView>
      {rightIcon && text === '' && <StyledText className={`absolute right-4 ${disabled && 'text-text-disable'}`}>{rightIcon}</StyledText>}
      {text !== "" && (
        <StyledButton
          onPress={clearTextField}
          className="absolute right-4 rounded-full"
        >
          <EvilIcons name="close" size={24} color="black" />
        </StyledButton>
      )}
    </StyledView>
  );
};

export default Textfield;
