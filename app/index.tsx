import {useState} from 'react'
import { Text, View } from "react-native";
import {styled} from 'nativewind'
import Button from "../components/core/Button";
import Textfield from "../components/core/Textfield";
import { TextInput } from "react-native-paper";

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)

export default function Page() {

  const [text, setText] = useState(String)

  return (
    <StyledView className='flex-1 h-full items-center p-5 justify-around'>
      {/* <Button size="medium" mode="primary" title='Button' />
      <Button size="medium" mode="secondary" title='Button' />
      <Button size="medium" mode="link" title='Button' />
      <Button size="medium" mode="primary" title='Button' disabled/>
      <Button size="medium" mode="secondary" title='Button' disabled/>
      <Button size="medium" mode="link" title='Button' disabled/> */}
      <Textfield label='Name' disable />
      <Textfield label='age' />
      <Textfield label='email' />
      <Textfield label='number' />
      <StyledTextInput 
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        className='w-full'
      />
    </StyledView>
  );
}
