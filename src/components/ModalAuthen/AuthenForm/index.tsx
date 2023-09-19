import {
    BottomTextWrapper,
    ButtonLogin,
    CheckboxWrapper,
    ErrorMessageApi, ErrorMessageWrapper,
    FormWrapper,
    LoginInput,
    PasswordIcon,
    PasswordWrapper,
    RememberMeWrapper
} from "./styles";
import {Form} from "antd";
import IcShowPassword from "@/assets/icons/ic_show_password.svg";
import IcHidePassword from '@/assets/icons/ic_hide_password.svg';
import IcErrorLogin from "@/assets/icons/ic_login_error.svg";
import React, {useState} from "react";
import {AuthEnum} from "@/components/ModalAuthen/constant";
import {useLocation, useNavigate, useSearchParams, createSearchParams} from "react-router-dom";
import {CheckboxValueType} from "antd/lib/checkbox/Group";
import {CheckboxChangeEvent} from "antd/es/checkbox";

const bottomTextArr = [
    {
        type: AuthEnum.Login,
        firstText: "Don't have an account? ",
        secondText: 'Register',
        path: AuthEnum.SignUp
    },
    {
        type: AuthEnum.SignUp,
        firstText: "Already have an account?",
        secondText: 'Sign in',
        path: AuthEnum.Login
    }
]

interface IAuthForm {
    errorMessageApi: string,
    typeForm: string;
    handleSubmit: (params: any) => void
}

interface IPasswordContainer {
    name: string,
    placeholder: string,
    rules: any
}

interface IIconWrapper {
    showPassword: boolean;
    togglePassword: () => void
}

const ErrorMessage = (props: any) => {
    return (
        <ErrorMessageWrapper>
            {props.message}
        </ErrorMessageWrapper>
    )
}

const IconWrapper: React.FC<IIconWrapper> = (props) => {
    const {showPassword, togglePassword} = props;

    return (
        <PasswordIcon>
            {
                showPassword
                    ? (<img src={IcHidePassword} alt="" onClick={togglePassword}/>)
                    : (<img src={IcShowPassword} alt="" onClick={togglePassword}/>)
            }
        </PasswordIcon>
    );
}

const PasswordContainer: React.FC<IPasswordContainer> = (props) => {
    const {name, placeholder, rules} = props;
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword)

    return (
        <PasswordWrapper>
            <Form.Item name={name} rules={rules}>
                <LoginInput
                    placeholder={placeholder}
                    maxLength={20}
                    className='login-input'
                    type={showPassword ? 'text' : 'password'}
                />
            </Form.Item>
            <IconWrapper
                showPassword={showPassword}
                togglePassword={togglePassword}
            />
        </PasswordWrapper>
    );
}


const AuthenForm: React.FC<IAuthForm> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation();
    const pathname = location.pathname;
    const {errorMessageApi, typeForm, handleSubmit} = props;
    const [form] = Form.useForm();

    const [isChecked, setIsChecked] = useState(false);
    const [showErrorMessageCheckbox, setShowErrorMessageCheckbox] = useState(false)

    const validateRequiredField = (_: any, value: any) => {
        let field = _.field;
        field = field.includes('-') ? field.replace('-', ' ') : field;
        if (value) {
            const trimmedValue = value.trim();
            if (trimmedValue === '') {
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject(
                    <ErrorMessage message={`Please enter a valid ${field}. `}/>
                );
            }
            return Promise.resolve();
            // eslint-disable-next-line prefer-promise-reject-errors
        } else
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject(
                <ErrorMessage message={`Please enter a valid ${field}. `}/>
            );
    };

    const validateEmailField = async (_: any, value: any) => {
        await validateRequiredField(_, value);
        const regex = /^\s*[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+\s*$/;

        if (value.trim()) {
            if (!regex.test(value)) {
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject(
                    <ErrorMessage message={"This doesn't look like a valid email."}/>
                );
            } else return Promise.resolve();
        }
    };

    const validatePasswordField = async (_: any, value: any) => {
        await validateRequiredField(_, value);
        if (value.trim() && value.length < 8) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject(
                <ErrorMessage message={'Password must be at least 8 characters.'}/>
            );
        }
    };

    const validateConfirmPasswordField = async (_: any, value: any) => {
        await validateRequiredField(_, value);
        const {password} = form.getFieldsValue(['password']);
        if (value !== password) {
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject(<ErrorMessage message={'Confirm password does not match.'}/>);
        }
        return Promise.resolve();
    }

    const renderBottomText = () => {
        const handleNavigate = (type?: string) => {
            if (type) {
                setSearchParams(createSearchParams({auth: type}))
            }
        }

        const data = bottomTextArr.find((item: any) => item.type === typeForm);

        return (
            <BottomTextWrapper>
                <span className="first-text">{data?.firstText}</span>
                <span className='second-text' onClick={() => handleNavigate(data?.path)}>{data?.secondText}</span>
            </BottomTextWrapper>
        );
    }

    const onChangeCheckbox = (e: CheckboxChangeEvent) => {
        setIsChecked(e.target.checked)
        setShowErrorMessageCheckbox(!e.target.checked)
    }

    const onFinishFailed = (errorInfor: any) => {
        if (typeForm === AuthEnum.SignUp && !isChecked) {
            setShowErrorMessageCheckbox(true);
        }
    }

    const onFinish = (values: any) => {
        setShowErrorMessageCheckbox(false)
        if (typeForm === AuthEnum.SignUp && !isChecked) {
            setShowErrorMessageCheckbox(true);
            return
        }
        const payload = {
            ...values,
            isChecked
        }
        handleSubmit(payload)
    }

    return (
        <>
            {errorMessageApi && (
                <ErrorMessageApi>
                    <img src={IcErrorLogin} alt=""/>
                    <div className="error-text">{errorMessageApi}</div>
                </ErrorMessageApi>
            )}
            <FormWrapper
                form={form}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
            >
                <Form.Item name={'email'} rules={[{validator: validateEmailField}]}>
                    <LoginInput
                        placeholder={'Email address'}
                        maxLength={100}
                        className='login-input'
                    />
                </Form.Item>

                <PasswordContainer
                    name={'password'}
                    placeholder={'Password'}
                    rules={[{validator: validatePasswordField}]}
                />

                {(typeForm === AuthEnum.SignUp || typeForm === AuthEnum.ResetPassword) && (
                    <PasswordContainer
                        name={'confirm-password'}
                        placeholder={'Confirm password'}
                        rules={[{validator: validateConfirmPasswordField}]}
                    />
                )}

                {typeForm === AuthEnum.Login && (
                    <RememberMeWrapper>
                        <div className="checkbox-container">
                            <CheckboxWrapper
                                onChange={onChangeCheckbox}
                            />
                            <div className="label">
                                Remember me
                            </div>
                        </div>

                        <div className='forget-password'>
                            Forgot Password?
                        </div>
                    </RememberMeWrapper>
                )}

                {typeForm === AuthEnum.SignUp && (
                    <>
                        <RememberMeWrapper>
                            <div className="checkbox-container">
                                <CheckboxWrapper
                                    onChange={onChangeCheckbox}
                                />
                                <div className="label">
                                    By clicking on Register, you agree to our {' '}
                                    <span>Terms of Use</span> {' '} and {' '} <span> Conditions of Use</span>
                                </div>
                            </div>
                        </RememberMeWrapper>
                        {showErrorMessageCheckbox &&
                            <ErrorMessage message={'Please checked this check box to continue'}/>}
                    </>

                )}


                {/*    Button submit */}
                <Form.Item>
                    <ButtonLogin type={'submit'}>
                        Sign In
                    </ButtonLogin>
                </Form.Item>

                {/*    Bottom text */}
                {renderBottomText()}
            </FormWrapper>
        </>
    )
}

export default AuthenForm;
