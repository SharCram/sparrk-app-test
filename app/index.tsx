import { useState } from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import Button from "../components/core/Button";
import Textfield from "../components/core/Textfield";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export default function Page() {
  const [text, setText] = useState(String);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{ flex: 1, gap: 5, padding: 18 }}>
        <Button title={"Button"} />
        <Button title={"Button"} size="medium" />
        <Button title={"Button"} size="small" />
        <Button title={"Button"} size="large" mode="secondary" />
        <Button title={"Button"} size="medium" mode="secondary" />
        <Button title={"Button"} size="small" mode="secondary" />
        <Button title={"Button"} size="large" mode="link" />
        <Button title={"Button"} size="medium" mode="link" />
        <Button title={"Button"} size="small" mode="link" />
        <Button title={"Button"} disabled/>
        <Button title={"Button"} size="medium" disabled />
        <Button title={"Button"} size="small" disabled />
        <Button title={"Button"} size="large" mode="secondary" disabled />
        <Button title={"Button"} size="medium" mode="secondary" disabled />
        <Button title={"Button"} size="small" mode="secondary" disabled />
        <Button title={"Button"} size="large" mode="link" disabled />
        <Button title={"Button"} size="medium" mode="link" disabled />
        <Button title={"Button"} size="small" mode="link" disabled />
      </ScrollView>
    </SafeAreaView>
  );
}
