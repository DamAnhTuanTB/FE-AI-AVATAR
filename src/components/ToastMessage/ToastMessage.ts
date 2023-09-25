import { toast } from 'react-toastify';
import Content from './Content';
import { MESSAGE_API } from '@/common/messageApi';

export const ToastError = (message: string, isMobile = false) => {
  // toast.dismiss();
  toast.error(Content(message, false), {
    position: isMobile ? 'bottom-right' : 'top-right',
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

export const ToastSuccess = (message: string, isMobile = false) => {
  // toast.dismiss();
  toast.success(Content(message, true), {
    position: isMobile ? 'bottom-center' : "top-right",
    autoClose: 13000,
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
