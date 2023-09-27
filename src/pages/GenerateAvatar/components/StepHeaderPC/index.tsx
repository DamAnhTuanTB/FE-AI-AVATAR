import { Wrapper } from './style';
import IconPrev from '@/assets/images/icon-prev.svg';
import IconViewMyAvatar from '@/assets/images/icon-view-my-avatar.svg';
import { StepEnum } from '../../contants';
interface IProps {
  step: number;
  onClickBack: any;
}

export default function StepHeaderPC({ step, onClickBack }: IProps) {
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
      text: 'Choose Styles',
    },
    {
      step: 4,
      text: 'Generate',
    },
  ];
  return (
    <Wrapper>
      {step !== StepEnum.GENERATE_SUCCESS && step !== StepEnum.GUIDE && (
        <div className="back" onClick={onClickBack}>
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
    </Wrapper>
  );
}
