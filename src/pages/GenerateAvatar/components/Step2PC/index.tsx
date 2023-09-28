import IconFemale from '@/assets/images/icon-female.svg';
import IconMale from '@/assets/images/icon-male.svg';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { StepEnum } from '../../contants';

interface IProps {
  gender: string;
  setGender: any;
  setStep: (step: number) => void;
  setOriginGender: any;
  setShowModalPayment: any;
}
export default function Step2PC({
  gender,
  setGender,
  setStep,
  setOriginGender,
  setShowModalPayment,
}: IProps) {
  const { logEvent } = useTrackingEvent();
  const handleClickGender = (item: string) => {
    setGender(item);
    setOriginGender(item);
  };
  const [searchParams] = useSearchParams();

  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const userInfor = useAppSelector((state: RootState) => state.app.userInfor);

  const numberGen = userInfor?.listGenerate?.filter(
    (item: any) => !item.used
  )?.length;

  const handleClickNext = () => {
    logEvent(eventTracking.select_gender_click_next.name, {
      [eventTracking.select_gender_click_next.params.gender]:
        gender.toLowerCase(),
      [eventTracking.select_gender_click_next.params.source]:
        searchParams.get('from'),
    });
    logEvent(eventTracking.preview_style_view.name, {
      [eventTracking.preview_style_view.params.source]:
        searchParams.get('from'),
    });
    if (!isLoggedIn || !numberGen) {
      setShowModalPayment(true);
    } else {
      setStep(StepEnum.CHOOSE_STYLE);
    }
  };

  useEffect(() => {
    logEvent(eventTracking.select_gender_view.name, {
      [eventTracking.select_gender_view.params.source]:
        searchParams.get('from'),
    });
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
