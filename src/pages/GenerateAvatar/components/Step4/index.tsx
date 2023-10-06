import IconGenerateSuccess from '@/assets/images/icon-generate-success.svg';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { getCookie } from '@/utils/cookies';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper, WrapperPC } from './style';
import { useSearchParams } from 'react-router-dom';
import useScreenSize from '@/hooks/useScreenSize';

interface IProps {
  handleClickBackToHome: any;
  handleClickMyAvatar: any;
  gender: string;
  styles: string[];
}

export default function Step4({
  handleClickBackToHome,
  handleClickMyAvatar,
  gender,
  styles,
}: IProps) {
  const { isDesktop } = useScreenSize();
  const { logEvent } = useTrackingEvent();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    logEvent(eventTracking.generating_view.name, {
      [eventTracking.generating_view.params.package]:
        getCookie('numberStyle') + 'style',
      [eventTracking.generating_view.params.gender]: gender.toLowerCase(),
      [eventTracking.generating_view.params.style]: styles.join(','),
      [eventTracking.generating_view.params.source]: searchParams.get('from'),
    });
  }, []);
  return isDesktop ? (
    <WrapperPC>
      <div className="content-text">
        <img className="icon-success" src={IconGenerateSuccess} alt="" />
        <div className="title-success">
          On our way! Your Avatar is being generated...
        </div>
        <div className="description-success">
          Hey it&lsquo;s time to sit back and relax! Our advanced AI technology
          works its magic to deliver your result.
          <div>
            Your personalized AI avatar will be crafted and promptly delivered
            straight to your email inbox when it&lsquo;s done.
          </div>
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
          text="Check My Avatars"
          width="152px"
          height="45px"
          background={false}
          border={true}
          onClick={handleClickMyAvatar}
        />
      </div>
    </WrapperPC>
  ) : (
    <Wrapper>
      <div className="content-text">
        <img className="icon-success" src={IconGenerateSuccess} alt="" />
        <div className="title-success">
          On our way! Your Avatar is being generated...
        </div>
        <div className="description-success">
          Hey it&lsquo;s time to sit back and relax! Our advanced AI technology
          works its magic to deliver your result.
          <div>
            Your personalized AI avatar will be crafted and promptly delivered
            straight to your email inbox when it&lsquo;s done.
          </div>
        </div>
      </div>
      <div className="group-button">
        <Button
          text="Back to Home"
          width="100%"
          height="45px"
          onClick={handleClickBackToHome}
        />
        <Button
          text="Check My Avatars"
          width="100%"
          height="45px"
          background={false}
          border={true}
          onClick={handleClickMyAvatar}
        />
      </div>
    </Wrapper>
  );
}
