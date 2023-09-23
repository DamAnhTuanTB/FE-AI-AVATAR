import {ModalWrapper} from "@/components/ModalUploadFilesExtendLimit/styles";
import IcCloseModalUploadFilesExtendLimit from '@/assets/icons/ic_close_modal_limit_upload_files.svg'
import {useAppDispatch} from "@/store/hooks";
import {setShowModalUploadFilesExtendLimit} from "@/store/slices/appSlice";

export default function ModalUploadFilesExtendLimit(props: any) {
    const dispatch = useAppDispatch();
    const handleCloseModal = () => {
        dispatch(setShowModalUploadFilesExtendLimit(false));
    }

    return (
        <ModalWrapper
            open={props.open}
            centered
            closable={false}
            footer={null}
        >
            <div className="header">
                <div className="text">
                    An error has occured
                </div>
                <div className="icon" onClick={() => handleCloseModal()}>
                    <img src={IcCloseModalUploadFilesExtendLimit} alt=""/>
                </div>
            </div>

            <div className="title">
                This file is too large to be uploaded. Files larger than 200 MB are not currently supported.
            </div>

            <div className="button-wrapper">
                <div className="button" onClick={() => handleCloseModal()}>
                    OK
                </div>
            </div>
        </ModalWrapper>
    )
}
