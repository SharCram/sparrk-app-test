import { StyleSheet, Text, View } from "react-native";
import {styled} from 'nativewind'
import Button from "../components/core/Button";

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Page() {
  return (
    <StyledView className='flex-1 h-full items-center justify-center'>
      <StyledText className="text-5xl font-bold">Hello World!</StyledText>
      <Button size="medium" mode="primary" title='Button' />
    </StyledView>
  );
}
