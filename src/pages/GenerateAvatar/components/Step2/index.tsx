import Button from '../Button';
import { Wrapper } from './style';

interface IProps {
  gender: string;
  setGender: any;
  setStep: (step: number) => void;
  setStyles: any;
}
export default function Step2({
  gender,
  setGender,
  setStep,
  setStyles,
}: IProps) {
  const handleClickGender = (item: string) => {
    setGender(item);
  };

  const handleClickNext = () => {
    setStep(3);
  };

  return (
    <Wrapper>
      <div className="title">Pick your gender</div>
      <div className="description">
        This information will improve our selection of model images for the
        generation of your photos.
      </div>
      {['Female', 'Male'].map((item: string, index: number) => (
        <div
          className={`gender ${gender === item && 'gender-active'}`}
          key={index}
          onClick={() => handleClickGender(item)}
        >
          {item}
        </div>
      ))}
      <div className="bottom">
        <Button
          onClick={handleClickNext}
          text="Next"
          width="100%"
          height="45px"
          disable={!gender}
        />
      </div>
    </Wrapper>
  );
}
