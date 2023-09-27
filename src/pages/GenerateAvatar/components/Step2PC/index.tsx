import IconFemale from '@/assets/images/icon-female.svg';
import IconMale from '@/assets/images/icon-male.svg';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './style';

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
  const { logEvent } = useTrackingEvent();
  const handleClickGender = (item: string) => {
    setGender(item);
  };

  const handleClickNext = () => {
    logEvent(eventTracking.select_gender_click_next.name, {
      [eventTracking.select_gender_click_next.params.gender]:
        gender.toLowerCase(),
    });
    logEvent(eventTracking.preview_style_view.name);
    setShowModalPreviewStyle(true);
  };

  useEffect(() => {
    logEvent(eventTracking.select_gender_view.name);
  }, []);

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
