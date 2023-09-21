import React from "react";
import BgModalLogin from '@/assets/images/bg_modal_login.png';
import IcCloseModal from '@/assets/icons/ic_close_modal.svg'
import {CustomModalWrapper} from "@/components/ModalAuthen/CustomModalAuthen/styles";
import {useSearchParams} from "react-router-dom";

interface ICustomModalAuthentication {
    open?: boolean,
    children?: any
}

const CustomModalAuthentication: React.FC<ICustomModalAuthentication> = ({
    open,
    children
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const auth = searchParams.get('auth');

    const handleCloseModal = () => {
        if (auth) {
            setSearchParams({});
        }
    }

    return (
        <CustomModalWrapper
            open={open}
            centered
            width={940}
            footer={null}
            closable={false}
        >
            <div className="close-icon-wrapper" onClick={() => handleCloseModal()}>
                <img src={IcCloseModal} alt=""/>
            </div>
            <div className="modal-wrapper">
                {/*    children */}
                <div className="children-wrapper">
                    {children}
                </div>

                {/*    background */}
                <div className="background-wrapper">
                    <div className="background">
                        <img src={BgModalLogin} alt=""/>
                    </div>
                </div>
            </div>
        </CustomModalWrapper>
    );
}

export default CustomModalAuthentication;
