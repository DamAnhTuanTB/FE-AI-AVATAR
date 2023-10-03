import React from 'react';
import BgModalLogin from '@/assets/images/bg_modal_login.png';
import BgPaymentSuccess from '@/assets/images/bg-payment-success.png';
import BgSmallLogin from '@/assets/images/bg-small-authen.png';
import IcCloseModal from '@/assets/icons/ic_close_modal.svg';
import { CustomModalWrapper } from '@/components/ModalAuthen/CustomModalAuthen/styles';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

interface ICustomModalAuthentication {
  open?: boolean;
  children?: any;
}

const CustomModalAuthentication: React.FC<ICustomModalAuthentication> = ({
  open,
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = searchParams.get('auth');

  const userExists = useAppSelector((state: RootState) => state.app.userExists);
  const emailSuccessPaymentButNotAuth = useAppSelector(
    (state: RootState) => state.app.emailSuccessPaymentButNotAuth
  );

  const handleCloseModal = () => {
    if (auth) {
      setSearchParams({});
    }
  };

  return (
    <CustomModalWrapper
      open={open}
      centered
      width={userExists === 0 ? 840 : 940}
      footer={null}
      closable={false}
    >
      {!emailSuccessPaymentButNotAuth && (
        <div className="close-icon-wrapper" onClick={() => handleCloseModal()}>
          <img src={IcCloseModal} alt="" />
        </div>
      )}

      <div
        className={`modal-wrapper ${
          userExists === 0 && 'payment-modal-wrapper'
        }`}
      >
        {/*    children */}
        <div className="children-wrapper">{children}</div>

        {/*    background */}
        {userExists === 0 ? (
          <div className="payment-success">
            <img src={BgPaymentSuccess} alt="" />
            <div className="text-1">Payment successfully</div>
            <div className="text-2">
              Please check your email to view your payment details
            </div>
          </div>
        ) : (
          <div className="background-wrapper">
            <div className="background">
              <img
                src={
                  emailSuccessPaymentButNotAuth ? BgSmallLogin : BgModalLogin
                }
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </CustomModalWrapper>
  );
};

export default CustomModalAuthentication;
