import useScreenSize from '@/hooks/useScreenSize';
import { Wrapper } from './style';
import IconDownloading from '@/assets/images/icon-downloading.gif';

interface IProps {
  open: boolean;
}

export default function ModalDownloading({ open }: IProps) {
  const { isDesktop } = useScreenSize();

  return (
    <Wrapper
      width={isDesktop ? 338 : 189}
      centered
      open={open}
      footer={false}
      closable={false}
    >
      <div className="modal-downloading">
        <img src={IconDownloading} alt="" />
        <div className="text-download">Downloading photos...</div>
      </div>
    </Wrapper>
  );
}
