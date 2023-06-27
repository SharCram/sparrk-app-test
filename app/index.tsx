import {useState} from 'react'
import { Text, View } from "react-native";
import {styled} from 'nativewind'
import Button from "../components/core/Button";
import Textfield from "../components/core/Textfield";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)

export default function Page() {

  const [text, setText] = useState(String)

  return (
    <StyledView className='flex-1 h-full items-center justify-around p-5 '>
      <Button size="medium" mode="primary" title='Button' />
      <Button size="medium" mode="secondary" title='Button' />
      <Button size="medium" mode="link" title='Button' />
      <Button size="medium" mode="primary" title='Button' disabled/>
      <Button size="medium" mode="secondary" title='Button' disabled/>
      <Button size="medium" mode="link" title='Button' disabled/>
      <Textfield label='Name'leftIcon={<Feather name="user" size={20} />}  />
      <Textfield label='Age' rightIcon={<Feather name="user" size={20} />} />
      <Textfield label='Email' />
      <Textfield label='Number' />
    </StyledView>
  );
}
