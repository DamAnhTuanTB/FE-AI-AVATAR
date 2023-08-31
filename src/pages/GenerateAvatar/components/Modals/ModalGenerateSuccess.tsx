import Button from '../Button';
import { Wrapper } from './style';
import IconGenerateSuccess from '@/assets/images/icon-generate-success.svg';
import IconClose from '@/assets/images/icon-delete-image.svg';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ModalGenerateSuccess({ open, setOpen }: IProps) {
  const handleCancel = () => {
    setOpen(false);
  };
  const handleClickBackToHome = () => {};
  const hanldeClickMyAvatar = () => {};
  return (
    <Wrapper
      width={328}
      centered
      open={open}
      onCancel={handleCancel}
      footer={false}
      closable={false}
    >
      <img
        className="icon-close"
        src={IconClose}
        alt=""
        onClick={handleCancel}
      />
      <img className="icon-success" src={IconGenerateSuccess} alt="" />
      <div className="title-success">On our way! About 15 minutes left...</div>
      <div className="description-success">
        Please wait for a few minutes, your Avatar is being generated. We will
        notify you when the results are ready and will send them to your email.
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
          onClick={hanldeClickMyAvatar}
        />
      </div>
    </Wrapper>
  );
}
