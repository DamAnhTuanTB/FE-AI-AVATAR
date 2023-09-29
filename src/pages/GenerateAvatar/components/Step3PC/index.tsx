/* eslint-disable eqeqeq */
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setCookie } from '@/utils/cookies';
import { Checkbox, Skeleton } from 'antd';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper } from './style';
import { useSearchParams } from 'react-router-dom';

interface IProps {
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  price: any;
  handleGenerate: any;
  sessionId: string;
  loadingGenerate: boolean;
}

export default function Step3PC({
  styles,
  setStyles,
  gender,
  listStyles,
  price,
  handleGenerate,
  sessionId,
  loadingGenerate,
}: IProps) {
  console.log('listStyles', listStyles, listStyles.length)
  const [searchParams] = useSearchParams();
  const { logEvent } = useTrackingEvent();
  const listGenerate = useAppSelector(
    (state: RootState) => state.app.userInfor.listGenerate
  );

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
        ToastError('You have reached the limit for choosing styles.');
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
      [eventTracking.choose_style_click_generate.params.session_id]: sessionId,
      [eventTracking.choose_style_click_generate.params.source]:
        searchParams.get('from'),
    });
    setCookie('numberStyle', currentGenerate?.priceInfo?.metadata?.numberStyle);
    handleGenerate();
  };

  useEffect(() => {
    logEvent(eventTracking.choose_style_view.name, {
      [eventTracking.choose_style_view.params.package]:
        currentGenerate?.priceInfo?.metadata?.numberStyle + 'style',
      [eventTracking.choose_style_view.params.gender]: gender.toLowerCase(),
      [eventTracking.choose_style_view.params.source]: searchParams.get('from'),
    });
  }, []);

  const getOrderStyleSelect = (style: string) => {
    return styles.findIndex((item: string) => item === style) + 1;
  };

  const handleDeselectAll = () => {
    setStyles([]);
  };

  console.log('numberrrr', currentGenerate?.priceInfo?.metadata?.numberStyle, styles?.length);
  

  return (
    <Wrapper>
      <div className="title">Select styles</div>
      <div className="description">
        You can select up to {currentGenerate?.priceInfo?.metadata?.numberStyle}{' '}
        styles due to your select package
      </div>
      <div className="count-number">
        <div>
          Selected Styled: {styles?.length}/
          {currentGenerate?.priceInfo?.metadata?.numberStyle}
        </div>
        <div
            className={styles?.length === 0 ? 'deselect-all-button-disabled' : 'deselect-all-button'}
            onClick={handleDeselectAll}
        >
          Deselect all
        </div>
      </div>
      <div className="parent-list-styles">
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
                    styles.includes(item.alias) ? 'style-active' : styles.length == currentGenerate?.priceInfo?.metadata?.numberStyle ? 'style-deactive' :''
                  } item-style`}
                >
                  <img className="image-style" src={item.thumbnail} alt="" />
                  <div className="name-style">{item.displayName}</div>
                  <div className="order-number">
                    {styles.includes(item.alias) &&
                      getOrderStyleSelect(item.alias)}
                  </div>
                  {/* <Checkbox
                    checked={styles.includes(item?.alias)}
                    className="checkbox"
                  /> */}
                </div>
              ))}
        </div>
      </div>
      <div className="btn-generate">
        <Button
          loading={loadingGenerate}
          onClick={handleClickNext}
          text="Generate"
          width="189px"
          height="45px"
          disable={!styles.length}
        />
      </div>
    </Wrapper>
  );
}
