/* eslint-disable eqeqeq */
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { eventTracking } from '@/firebase/firebase';
import useTrackingEvent from '@/hooks/useTrackingEvent';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setCookie } from '@/utils/cookies';
import { Skeleton } from 'antd';
import { useEffect } from 'react';
import Button from '../Button';
import { Wrapper, WrapperPC } from './style';
import { useSearchParams } from 'react-router-dom';
import useScreenSize from '@/hooks/useScreenSize';

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

export default function Step3({
  styles,
  setStyles,
  gender,
  listStyles,
  handleGenerate,
  sessionId,
  loadingGenerate,
}: IProps) {
  const { isDesktop } = useScreenSize();
  const [searchParams] = useSearchParams();

  const listGenerate = useAppSelector(
    (state: RootState) => state.app.userInfor.listGenerate
  );
  const { logEvent } = useTrackingEvent();

  const currentGenerate = listGenerate
    ?.filter((item: any) => !item.used)
    .reverse()[0];

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
        ToastError('You have reached the limit for choosing styles.', true);
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

  return isDesktop ? (
    <WrapperPC>
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
          className={
            styles?.length === 0
              ? 'deselect-all-button-disabled'
              : 'deselect-all-button'
          }
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
                  className="style-item-wrapper"
                  key={item.id}
                  onClick={() => handleClickStyle(item.alias)}
                >
                  {styles.includes(item.alias) && (
                    <div className="border-style" />
                  )}
                  <div
                    className={`${
                      styles.includes(item.alias)
                        ? 'style-active'
                        : styles.length ==
                          currentGenerate?.priceInfo?.metadata?.numberStyle
                        ? 'style-inactive'
                        : ''
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
    </WrapperPC>
  ) : (
    <Wrapper>
      <div className="title">Select styles</div>
      <div className="description">
        You can select up to {currentGenerate?.priceInfo?.metadata?.numberStyle}{' '}
        styles due to your select package
      </div>
      <div className="count-select">
        <div>
          Selected Styled: {styles?.length}/
          {currentGenerate?.priceInfo?.metadata?.numberStyle}
        </div>
        <div onClick={handleDeselectAll}>Deselect all</div>
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
                className="style-item-wrapper"
                key={item.id}
                onClick={() => handleClickStyle(item.alias)}
              >
                {styles.includes(item.alias) && (
                  <div className="border-style" />
                )}
                <div
                  className={`${
                    styles.includes(item.alias)
                      ? 'style-active'
                      : styles.length ===
                        parseInt(
                          currentGenerate?.priceInfo?.metadata?.numberStyle
                        )
                      ? 'style-inactive'
                      : ''
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
              </div>
              // <div
              //   onClick={() => handleClickStyle(item.alias)}
              //   key={item.id}
              //   className={`${
              //     styles.includes(item.alias) && 'style-active'
              //   } item-style`}
              // >
              //   <img className="image-style" src={item.thumbnail} alt="" />
              //   <div className="name-style">{item.displayName}</div>
              //   <div className="order-number">
              //     {styles.includes(item.alias) &&
              //       getOrderStyleSelect(item.alias)}
              //   </div>
              // </div>
            ))}
        {}
      </div>
      <div className="bottom">
        <Button
          loading={loadingGenerate}
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
