import { Wrapper } from './style';
import Button from '../Button';
import IconGenerateSuccess from '@/assets/images/icon-generate-success.svg';

interface IProps {
  setStep: any;
}

export default function Step4({ setStep }: IProps) {
  const handleClickBackToHome = () => {};
  const handleClickMyAvatar = () => {};
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
          width="100%"
          height="45px"
          onClick={handleClickBackToHome}
        />
        <Button
          text="My Avatars"
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
