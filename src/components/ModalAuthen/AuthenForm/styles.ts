import {styled} from "styled-components";
import {Checkbox, Form, Input} from "antd";
import {breakpoints} from "@/config/breakpoints";

export const ErrorMessageApi = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  .error-text {
    color: var(--status-alert, #EF4444);

    /* Body/Body 1.1/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
  }
`

export const FormWrapper = styled(Form)`
  width: 100%;

  .ant-form-item {
    margin-bottom: 3px !important;
  }

  .login-input, .ant-input {
    color: var(--text-secondary, #737373) !important;

    /* Sub-headings/Sub-head 2/Regular */
    font-family: Outfit, sans-serif !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 150% !important; /* 21px */
  }

  .ant-input:hover, .ant-input:focus {
    border-color: #F6C447;
  }

  .ant-input-status-error {
    border: 1px solid #F84848 !important;
  }

  .login-input::placeholder {
    color: var(--text-secondary, #737373);

    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`

export const LoginInput = styled(Input)`
  height: 48px !important;
  padding: 0 16px !important;
  border-radius: 12px !important;
  background: var(--neutral-100, #f5f5f5) !important;
  border: 1px solid transparent;
  outline: 0 !important;
  box-shadow: none !important;
  &:disabled {
    border: none;
    background: #e7e7e7 !important;
    color: var(--secondary-disable, #a3a3a3) !important;
  }
`;

export const ErrorMessageWrapper = styled.p<{isSignUpCheckbox?: boolean}>`
  color: var(--status-alert, #EF4444);

  /* Body/Body 2/Regular */
  font-family: Outfit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  margin-top: 8px;
  margin-bottom: ${props => props.isSignUpCheckbox ? '0' : '12px'};
`

export const PasswordWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`

export const PasswordIcon = styled.div`
  position: absolute;
  top: 0;
  right: 13px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const RememberMeWrapper = styled.div<{isSignUpModal: boolean}>`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: ${props => props.isSignUpModal ? '48px' : 'auto'};

  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: ${props => props.isSignUpModal ? '20px' : '12px'};
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 8px;

    .label {
      //height: 20px;
      color: var(--text-secondary, #737373);

      /* Body/Body 2/Medium */
      font-family: Outfit;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 18px */

      span {
        color: var(--text-primary, #18181B);

        /* Body/Body 2/Semibold */
        font-family: Outfit;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
      }
    }
  }

  .forget-password {
    color: var(--text-primary, #18181B);

    /* Body/Body 2/Medium */
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
    cursor: pointer;
  }
`

export const CheckboxWrapper = styled(Checkbox)`
  display: flex;
  
  .ant-checkbox:hover {
    //border: 1.5px solid var(--primary-1, #F6C447) !important;
    border-color: transparent;
    outline: 0;
    box-shadow: none;
  }

  .ant-checkbox-inner {
    border-radius: 4px !important;
    border: 1.5px solid var(--text-disable, #E5E5E5);
    width: 20px;
    height: 20px;
    background: transparent;
  }
  
  .ant-checkbox-inner:hover {
    border: 1.5px solid var(--primary-1, #F6C447) !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border: 1.5px solid var(--text-disable, #E5E5E5);
    background: var(--primary-1, #F6C447);
  }
`

export const ButtonLogin = styled.button<{primaryButton?: boolean, isRequestNewLinkButton: boolean}>`
  width: 100%;
  height: 48px;
  margin-top: ${(props) => props.isRequestNewLinkButton ? '0' : '20px'};

  border: none;
  outline: 0;
  padding: 14px 32px;
  border-radius: 100px;
  background: ${props => props.primaryButton ? 'var(--primary-1, #F6C447)' : 'var(--secondary-black, #262626)'} ;
  cursor: pointer;

  color: ${props => props.primaryButton ? '#18181B' : '#FFF'};
  text-align: center;

  /* Body/Body 1/Medium */
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`

export const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .first-text {
    color: var(--noble-black-400, #686B6E);

    /* Sub-headings/Sub-head 2/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-right: 4px;
  }

  .second-text {
    color: var(--neutral-800, #262626);

    /* Sub-headings/Sub-head 2/Medium */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    cursor: pointer;
  }
`

export const BackToSignInButton = styled.div`
  width: 100%;
  margin-top: 20px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .text {
    color: var(--secondary-black, #262626);
    text-align: center;

    /* Sub-headings/Sub-head 2/Regular */
    font-family: Outfit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`
