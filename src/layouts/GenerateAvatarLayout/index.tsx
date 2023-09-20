import {Outlet, useLocation, useSearchParams} from 'react-router-dom';
import {ContentWrapper, DefaultLayoutWrapper} from './style';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModalLogin from "@/components/ModalAuthen/ModalLogin";
import {AuthEnum} from "@/components/ModalAuthen/constant";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {RootState} from "@/store/store";
import {useEffect} from "react";
import {getUserInfo} from "@/store/slices/app.thunk";
import authServices from "@/services/auth.service";
import {HTTP_STATUS} from "@/services/config/api";
import {setUserInfor} from "@/store/slices/appSlice";

export default function GenerateAvatarLayout() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const pathname = location.pathname;
    const [searchParams] = useSearchParams();
    const auth = searchParams.get('auth');
    const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);

    const getMeFromAuthenService = async () => {
        try {
            const res = await authServices.getUserInforFromAuthenService();
            if (res && res.status === HTTP_STATUS.SUCCESS) {
                const data = res.data.data;
                const obj = {
                    userAvatar: data?.avatar,
                    userEmail: data?.email,
                    id: data?.id
                };
                dispatch(setUserInfor(obj))
            }
        } catch (err: any) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            // getUserInfo()
            getMeFromAuthenService()
        }
    }, [pathname, isLoggedIn]);

    return (
        <DefaultLayoutWrapper>
            <Header/>
            <ContentWrapper>
                <Outlet/>
            </ContentWrapper>
            {/* <Footer /> */}
            {(auth && !isLoggedIn) && <ModalLogin open={!!auth && !isLoggedIn}
            />}

        </DefaultLayoutWrapper>
    );
}
