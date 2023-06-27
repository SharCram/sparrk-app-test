import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StyledComponent, styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);

type textFieldProps = {
  label: String,
  disable?: boolean
}

const Textfield = ({label, disable} : textFieldProps) => {
  const [text, setText] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledView className="h-[52px] w-full gap-0 px-[14px] justify-center bg-background-color-secondary border-[1px] border-border-primary rounded-[6px] relative">
      <StyledTextInput
        className="text-[16px] peer font-bold"
        onChangeText={(e) => setText(e)}
        value={text}
        // placeholder="Label"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={disable}
      />
      <StyledText
        className={` absolute left-3.5 ${
          isFocused || text != "" ? "top-0 text-[12px] text-text-secondary" : "top-3.5 text-[16px]"
        } transition-all`}
      >
        {label}
      </StyledText>
    </StyledView>
  );
};

export default Textfield;
