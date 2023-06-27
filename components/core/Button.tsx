import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);

type buttonParams = {
  size?: "large" | "medium" | "small";
  mode?: "primary" | "secondary" | "link";
  disabled?: boolean;
  title?: String;
};

const Button = ({ size, mode, disabled, title }: buttonParams) => {
  const handleButtonSize = () => {
    switch (size) {
      case "large":
        return "h-[52px]";
      case "medium":
        return "h-[48px]";
      case "small":
        return "h-[36px]";
    }
  };

  const handleButtonMode = () => {
    switch (mode) {
      case "primary":
        return disabled ? "bg-btn-disable" : "bg-btn-primary";
      case "secondary":
        return `border-[0.5px] bg-background-color-secondary ${
          disabled ? "border-btn-disable" : "border-btn-secondary"
        } bg-secondary-white`;
      case "link":
        return "";
    }
  };

  const handleTextColor = () => {
    switch (mode) {
      case "primary":
        return `${
          disabled ? "text-text-secondary" : "text-text-light"
        } font-bold`;
      case "secondary":
        return `${
          disabled ? "text-text-secondary" : "text-text-primary"
        } font-bold`;
      case "link":
        return `${
          disabled ? "text-text-disable" : "text-text-primary"
        } font-normal underline`;
    }
  };

  return (
    <StyledButton
      className={`${handleButtonSize()} ${handleButtonMode()} w-full items-center justify-center rounded-[6px]`}
      disabled={disabled}
    >
      <StyledText className={`text-[18px] ${handleTextColor()}`}>
        {title}
      </StyledText>
    </StyledButton>
  );
};

export default Button;
