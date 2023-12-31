import useScreenSize from '@/hooks/useScreenSize';
import { Wrapper } from './style';
interface IProps {
  text: string;
  width?: string;
  height: string;
  border?: boolean;
  background?: boolean;
  disable?: boolean;
  loading?: boolean;
  onClick: any;
}
export default function Button({
  text,
  width,
  height,
  border = false,
  background = true,
  disable = false,
  onClick,
  loading = false,
}: IProps) {
  const { isMobile } = useScreenSize();
  return (
    <Wrapper
      isMobile={isMobile}
      background={background}
      onClick={onClick}
      disabled={disable}
      style={{
        width,
        height,
        background: background ? '#F6C447' : 'transparent',
        border: border ? '1px solid var(--neutral-300, #D4D4D4)' : 'none',
      }}
      loading={loading}
    >
      {text}
    </Wrapper>
  );
}
