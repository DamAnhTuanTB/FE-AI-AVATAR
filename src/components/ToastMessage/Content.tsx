import styles from './ToastMessage.module.scss';
import ToastError from '@/assets/icons/ic_toast_message_error.svg';
import CheckIcon from '@/assets/icons/ic_toast_message_success.svg';
import IconClose from '@/assets/icons/icon-close-noti.svg';
import { toast } from 'react-toastify';

const Content = (value: string, success: boolean) => {
  const handleCloseNoti = () => {
    toast.dismiss();
  };
  return (
    <div className={styles.toastWrapper}>
      <div>
        <img src={success ? CheckIcon : ToastError} alt="" />
        <span className={styles.txtContentError}>{value}</span>
      </div>
      {/* <img src={IconClose} alt="" onClick={handleCloseNoti} /> */}
    </div>
  );
};

export default Content;
