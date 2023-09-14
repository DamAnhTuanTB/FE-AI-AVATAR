import { Input } from 'antd';
import Button from '../Button';
import { Wrapper } from './style';
import IconClose from '@/assets/images/icon-delete-image.svg';
import useScreenSize from '@/hooks/useScreenSize';

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  handleGenerate: any;
}

export default function ModalPressEmail({
  open,
  setOpen,
  email,
  setEmail,
  handleGenerate,
}: IProps) {
  const handleCancel = () => {
    setOpen(false);
    setEmail('');
  };

  const handleSubmit = () => {
    handleGenerate();
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const { isDesktop } = useScreenSize();

  return (
    <Wrapper
      width={isDesktop ? 589 : 338}
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
      <div className="modal-press-email">
        <div className="title-press-email">
          Enter your email to see your results!
        </div>
        <div className="des-press-email">
          We will notify you when the results are ready and will send them to
          your email.
        </div>
        <div className="title-email">Email</div>
        <Input
          value={email}
          placeholder="Enter email here..."
          className="input-email"
          onChange={handleChangeEmail}
        />
        <Button
          disable={!email}
          text="Submit"
          width="100%"
          height="45px"
          onClick={handleSubmit}
        />
      </div>
    </Wrapper>
  );
}
