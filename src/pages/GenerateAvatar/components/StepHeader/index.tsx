import useScreenSize from '@/hooks/useScreenSize';
import { StepEnum } from '../../contants';
import { Wrapper, WrapperPC } from './style';
import IconPrev from '@/assets/images/icon-prev.svg';

interface IProps {
  step: number;
  onClick: () => void;
}

const steps = [
  {
    step: 1,
    text: 'Upload Photos',
  },
  {
    step: 2,
    text: 'Select Gender',
  },
  {
    step: 3,
    text: 'Select Styles',
  },
  {
    step: 4,
    text: 'Generate',
  },
];

export default function StepHeader({ step, onClick }: IProps) {
  const { isDesktop } = useScreenSize();
  return isDesktop ? (
    <WrapperPC>
      {step !== StepEnum.GENERATE_SUCCESS && step !== StepEnum.GUIDE && (
        <div className="back" onClick={onClick}>
          <img src={IconPrev} alt="" />
          <span>Back</span>
        </div>
      )}
      <div className="list-steps">
        {steps.map((item: any) => (
          <div
            className={`item-step ${step === item.step && 'item-step-active'}`}
            key={item.step}
          >
            <div className="number">{item.step}</div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
      {/* <div className="view-avatar">
        <span>View My Generated Avatar</span>
        <img src={IconViewMyAvatar} alt="" />
      </div> */}
    </WrapperPC>
  ) : (
    <Wrapper>
      {step !== StepEnum.GUIDE && step !== StepEnum.GENERATE_SUCCESS && (
        <img src={IconPrev} alt="" onClick={onClick} />
      )}
      Step {Math.floor(step)}/4
    </Wrapper>
  );
}
