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

const Button = ({ size= 'large', mode='primary', disabled, title }: buttonParams) => {

  const buttonSizeStyles = {
    large: "h-[52px]",
    medium: "h-[48px]",
    small: "h-[36px]",
  };

  const buttonModeStyles = {
    primary: disabled ? "bg-btn-disable" : "bg-btn-primary",
    secondary: disabled
      ? "border-[0.5px] bg-background-color-secondary border-btn-disable bg-secondary-white"
      : "border-[0.5px] bg-background-color-secondary border-btn-secondary bg-secondary-white",
    link: ''
  };

  const buttonTextStyle = {
    primary: disabled ? 'font-bold text-text-secondary' : 'font-bold text-text-light',
    secondary: disabled ? 'font-bold text-text-secondary' : 'font-bold text-text-primary',
    link: disabled ? 'text-text-disable font-normal underline' : 'text-text-primary font-normal underline'
  }

  const textSizeStyles = {
    large: 'text-lg',
    medium: 'text-base',
    small: 'text-sm'
  }

  return (
    <StyledButton
      className={`${buttonSizeStyles[size]} ${buttonModeStyles[mode]} w-full items-center justify-center rounded-[6px]`}
      disabled={disabled}
    >
      <StyledText className={`text-[18px] ${buttonTextStyle[mode]} ${mode === 'link' ? textSizeStyles[size] : undefined}`}>
        {title}
      </StyledText>
    </StyledButton>
  );
};

export default Button;
