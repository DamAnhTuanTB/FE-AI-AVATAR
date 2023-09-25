import { Wrapper } from './style';
import Button from '../Button';
import IconGenerateSuccess from '@/assets/images/icon-generate-success.svg';
import { useEffect } from 'react';
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';
import { getCookie } from '@/utils/cookies';

interface IProps {
  handleClickBackToHome: any;
  handleClickMyAvatar: any;
  gender: string;
  styles: string[];
}

export default function Step4PC({
  handleClickBackToHome,
  handleClickMyAvatar,
  gender,
  styles,
}: IProps) {
  useEffect(() => {
    analyticsLogEvent(eventTracking.generating_view.name, {
      [eventTracking.generating_view.params.package]:
        getCookie('numberStyle') + 'style',
      [eventTracking.generating_view.params.gender]: gender.toLowerCase(),
      [eventTracking.generating_view.params.style]: styles.join(','),
    });
  }, []);
  return (
    <Wrapper>
      <div className="content-text">
        <img className="icon-success" src={IconGenerateSuccess} alt="" />
        <div className="title-success">
          On our way! About 15 minutes left...
        </div>
        <div className="description-success">
          Please wait for a few minutes, your Avatar is being generated. We will
          notify you when the results are ready and will send them to your
          email.
        </div>
      </div>
      <div className="group-button">
        <Button
          text="Back to Home"
          width="152px"
          height="45px"
          onClick={handleClickBackToHome}
        />
        <Button
          text="My Avatars"
          width="126px"
          height="45px"
          background={false}
          border={true}
          onClick={handleClickMyAvatar}
        />
      </div>
    </Wrapper>
  );
}
