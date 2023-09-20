import useCountDown from '@/hooks/useCountDown';
import { Colon, TimeBlock, TimeNumber, TimeString, Wrapper } from './styles';

export default function CountDown() {
  const abc = useCountDown('9/23/2023');
  return (
    <Wrapper>
      <TimeBlock>
        <TimeNumber>01</TimeNumber>
        <TimeString>DAY</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>01</TimeNumber>
        <TimeString>HOURS</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>01</TimeNumber>
        <TimeString>MINUTES</TimeString>
      </TimeBlock>
      <Colon>:</Colon>
      <TimeBlock>
        <TimeNumber>01</TimeNumber>
        <TimeString>SECONDS</TimeString>
      </TimeBlock>
    </Wrapper>
  );
}
