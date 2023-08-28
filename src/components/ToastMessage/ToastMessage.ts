import { toast } from 'react-toastify';
import Content from './Content';
import { MESSAGE_API } from '@/common/messageApi';

export const ToastError = (message: string) => {
  // toast.dismiss();
  toast.error(Content(message, false), {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    progressStyle: { color: 'white' },
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: false,
  });
};

export const ToastSuccess = (message: string) => {
  // toast.dismiss();
  toast.success(Content(message, true), {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    progressStyle: { color: 'white' },
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: false,
  });
};

export const ErrorApi = (error: any) => {
  return ToastError(
    error?.response?.data?.message ||
      error?.response?.message ||
      MESSAGE_API.SOMETHING_WRONG
  );
};
