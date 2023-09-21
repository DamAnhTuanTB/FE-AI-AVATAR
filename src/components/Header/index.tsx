import {ContentPopoverWrapper, HeaderWrapper, PopoverAvatarWrapper} from './style';
import LogoHeader from '@/assets/images/logo-ai.svg';
import {createSearchParams, useSearchParams} from "react-router-dom";
import {AuthEnum} from "@/components/ModalAuthen/constant";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {RootState} from "@/store/store";
import {UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import IcSignOut from '@/assets/icons/ic_signout.svg'
import {logOut} from "@/store/slices/authSlice";
import {initialUserInfo, setUserInfor} from "@/store/slices/appSlice";

const Header = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);
    const userInfor = useAppSelector((state: RootState) => state.app.userInfor)
    const [searchParams, setSearchParams] = useSearchParams()

    const handleShowSignInModal = () => {
        setSearchParams(createSearchParams({auth: AuthEnum.Login}))
    }

    const contentPopover = () => {
        const handleLogout = () => {
            dispatch(setUserInfor({...initialUserInfo}));
            dispatch(logOut());
        }

        return (
            <ContentPopoverWrapper>
                <div className="title">
                    <div className="image">
                        <Avatar src={userInfor?.userAvatar}  size={32} icon={<UserOutlined/>}/>
                    </div>
                    <div className="infor">
                        <div className="email">{userInfor?.userEmail}</div>
                    </div>
                </div>
                <div className="remaining-generated-count">
                    Remaining generate count: 0
                </div>
                <div className="dash" />

                <div className="sign-out-btn" onClick={() => handleLogout()}>
                    <div className="text">Sign out</div>
                    <div className="icon">
                        <img src={IcSignOut} alt=""/>
                    </div>
                </div>
            </ContentPopoverWrapper>
        )
    };

    return (
        <HeaderWrapper>
            <img src={LogoHeader} alt=""/>
            {!isLoggedIn
                ? (
                    <div className="sign-in" onClick={() => handleShowSignInModal()}>
                        Sign In
                    </div>
                )
                : (
                    <div className='avatar-wrapper'>
                        <div className="button">
                            View My Generated Avatar
                        </div>
                        <div className="avatar-item">
                            <PopoverAvatarWrapper
                                placement="bottomRight"
                                content={contentPopover}
                                trigger={'click'}
                            >
                                <Avatar src={userInfor?.userAvatar} size={40} icon={<UserOutlined/>}/>
                            </PopoverAvatarWrapper>
                        </div>
                    </div>
                )
            }

        </HeaderWrapper>
    );
};
export default Header;
