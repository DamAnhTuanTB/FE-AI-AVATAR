import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setCookie } from '@/utils/cookies';
import { Skeleton } from 'antd';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './style';

interface IProps {
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  price: any;
  handleGenerate: any;
  sessionId: string;
}

export default function Step3({
  styles,
  setStyles,
  gender,
  listStyles,
  price,
  handleGenerate,
  sessionId,
}: IProps) {
  // useEffect(() => {
  //   // if (
  //   //   localStorage.getItem('passGender') &&
  //   //   localStorage.getItem('passGender') !== gender
  //   // ) {
  //   setStyles([]);
  //   // }
  // }, []);

  const listGenerate = useAppSelector(
    (state: RootState) => state.app.userInfor.listGenerate
  );
  const { logEvent } = useTrackingEvent();

  const currentGenerate = listGenerate?.filter((item: any) => !item.used)[0];

  const handleClickStyle = (alias: string) => {
    const index = styles.findIndex((style: string) => style === alias);
    if (index !== -1) {
      styles.splice(index, 1);
    } else {
      if (
        styles.length >
        Number(currentGenerate?.priceInfo?.metadata?.numberStyle) - 1
      ) {
        // price.maxStyle - 1
        ToastError('The maximum quantity has been selected.', true);
      } else {
        styles.push(alias);
      }
    }
    setStyles([...styles]);
  };

  const handleClickNext = () => {
    if (!styles.length) return;
    logEvent(eventTracking.choose_style_click_generate.name, {
      [eventTracking.choose_style_click_generate.params.package]:
        currentGenerate?.priceInfo?.metadata?.numberStyle + 'style',
      [eventTracking.choose_style_click_generate.params.gender]:
        gender.toLowerCase(),
      [eventTracking.choose_style_click_generate.params.style]:
        styles.join(','),
      [eventTracking.choose_style_click_generate.params.session_id]:
        styles.join(','),
    });
    setCookie('numberStyle', currentGenerate?.priceInfo?.metadata?.numberStyle);
    handleGenerate(currentGenerate?.timePayment);
  };

  useEffect(() => {
    logEvent(eventTracking.choose_style_view.name, {
      [eventTracking.choose_style_view.params.package]:
        currentGenerate?.priceInfo?.metadata?.numberStyle + 'style',
      [eventTracking.choose_style_view.params.gender]: gender.toLowerCase(),
    });
  }, []);

  return (
    <Wrapper>
      <div className="title">Choose styles</div>
      <div className="description">
        Select from a diverse range of up to{' '}
        {currentGenerate?.priceInfo?.metadata?.numberStyle} avatar styles.
      </div>
      <div className="list-styles">
        {listStyles?.length === 0
          ? Array(20)
              .fill(1)
              .map((item: any, index: number) => (
                <div className="item-style" key={index}>
                  <Skeleton.Button className="skeleton-image" active />
                  <Skeleton.Button className="skeleton-text" active />
                </div>
              ))
          : listStyles.map((item: any) => (
              <div
                onClick={() => handleClickStyle(item.alias)}
                key={item.id}
                className={`${
                  styles.includes(item.alias) && 'style-active'
                } item-style`}
              >
                <img className="image-style" src={item.thumbnail} alt="" />
                <div className="name-style">{item.displayName}</div>
              </div>
            ))}
        {}
      </div>
      <div className="bottom">
        <Button
          onClick={handleClickNext}
          text="Generate"
          width="100%"
          height="45px"
          disable={!styles.length}
        />
      </div>
    </Wrapper>
  );
}
