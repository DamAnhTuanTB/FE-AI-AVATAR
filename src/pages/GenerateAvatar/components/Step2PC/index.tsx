import { StepEnum } from '../../contants';
import Button from '../Button';
import { Wrapper } from './style';
import IconFemale from '@/assets/images/icon-female.svg';
import IconMale from '@/assets/images/icon-male.svg';

interface IProps {
  gender: string;
  setGender: any;
  setStep: (step: number) => void;
  setStyles: any;
  setShowModalPreviewStyle: any;
}
export default function Step2PC({
  gender,
  setGender,
  setStep,
  setStyles,
  setShowModalPreviewStyle,
}: IProps) {
  const handleClickGender = (item: string) => {
    setGender(item);
  };

  const handleClickNext = () => {
    setShowModalPreviewStyle(true);
  };

  return (
    <Wrapper>
      <div className="text-gender">
        <div className="title">Select your gender</div>
        <div className="description">Select a gender you want to generate</div>
      </div>
      <div className="list-gender">
        {['Female', 'Male'].map((item: string, index: number) => (
          <div
            className={`gender ${gender === item && 'gender-active'}`}
            key={index}
            onClick={() => handleClickGender(item)}
          >
            <img src={item === 'Female' ? IconFemale : IconMale} alt="" />
            {item}
          </div>
        ))}
      </div>
      <Button
        onClick={handleClickNext}
        text="Next"
        width="212px"
        height="45px"
        disable={!gender}
      />
    </Wrapper>
  );
}
