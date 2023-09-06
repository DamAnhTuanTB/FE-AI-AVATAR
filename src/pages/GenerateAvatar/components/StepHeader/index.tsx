import { Wrapper } from './style';
import IconPrev from '@/assets/images/icon-prev.svg';

interface IProps {
  step: number;
  onClick: () => void;
}

export default function StepHeader({ step, onClick }: IProps) {
  return (
    <Wrapper>
      <img src={IconPrev} alt="" onClick={onClick} />
      Step {Math.floor(step)}/4
    </Wrapper>
  );
}
