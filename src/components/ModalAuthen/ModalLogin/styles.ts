import {styled} from "styled-components";
import {Form, Input} from "antd";

export const ModalTextTitle = styled.div`
  color: var(--text-primary, #18181B);
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin-bottom: 24px;
`

export const LoginWithSocialWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 20px;

  .login-social-button {
    height: 48px;
    border-radius: 100px;
    border: 1px solid var(--neutral-300, #D4D4D4);
    box-shadow: 0px 4px 13px 0px rgba(48, 48, 48, 0.05);

    padding: 14px 32px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .login-icon-wrapper {
      height: 47px;
      position: absolute;
      top: 0;
      left: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .login-icon {
        width: 20px;
        height: 20px;
      }
    }

    .button-title {
      color: var(--secondary-black, #262626);
      text-align: center;

      /* Sub-headings/Sub-head 2/Medium */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 21px */
    }
  }
`

export const OrTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  .dash {
    width: 181px;
    height: 0.5px;
    background: var(--text-disable, #E5E5E5);
  }

  .text {
    color: var(--secondary-disable, #A3A3A3);
    text-align: center;

    /* Sub-headings/Sub-head 2/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`

export const TxtLabel = styled.div`
  color: var(--secondary-black, #262626);

  /* Body/Body 1/Medium */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  margin-bottom: 8px;
`

export const ForgetPasswordWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    height: 32px;
    margin-bottom: 20px;
  }

  .text-wrapper {
    margin-bottom: 16px;
    text-align: center;

    .title {
      color: var(--text-primary, #18181B);
      text-align: center;

      /* Sub-headings/Sub-head 1/Semibold */
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 24px */
      margin-bottom: 8px;
    }

    .subtitle {
      color: var(--text-primary, #18181B);
      text-align: center;

      /* Body/Body 1/Regular */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
    }
  }

  .resend-email-wrapper {
    color: var(--text-primary, #18181B);
    text-align: center;

    /* Sub-headings/Sub-head 2/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */

    span {
      color: var(--text-primary, #18181B);

      /* Sub-headings/Sub-head 2/Semibold */
      font-family: Outfit;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      cursor: pointer;
    }
  }
`

