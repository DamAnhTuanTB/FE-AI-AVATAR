import { Wrapper } from './style';
import IconPrev from '@/assets/images/icon-prev.svg';

interface IProps {
  step: number;
  successPurchase: boolean;
  onClick: () => void;
}

export default function StepHeader({ step, successPurchase, onClick }: IProps) {
  const isNotShowIconBack = step === 4 || (step === 2.5 && successPurchase);
  return (
    <Wrapper>
      {!isNotShowIconBack && <img src={IconPrev} alt="" onClick={onClick} />}
      Step {Math.floor(step)}/4
    </Wrapper>
  );
}
