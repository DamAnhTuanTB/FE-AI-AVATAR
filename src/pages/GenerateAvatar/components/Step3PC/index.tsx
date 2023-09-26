import { useEffect } from 'react';
import { Wrapper } from './style';
import Button from '../Button';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { analyticsLogEvent } from '@/firebase';
import { eventTracking } from '@/firebase/firebase';
import { setCookie } from '@/utils/cookies';
import { Checkbox, Skeleton } from 'antd';

interface IProps {
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  price: any;
  handleGenerate: any;
  sessionId: string;
}

export default function Step3PC({
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
        ToastError('The maximum quantity has been selected.');
      } else {
        styles.push(alias);
      }
    }
    setStyles([...styles]);
  };

  const handleClickNext = () => {
    analyticsLogEvent(eventTracking.choose_style_click_generate.name, {
      [eventTracking.choose_style_click_generate.params.package]:
        currentGenerate?.priceInfo?.metadata?.numberStyle + 'style',
      [eventTracking.choose_style_click_generate.params.gender]:
        gender.toLowerCase(),
      [eventTracking.choose_style_click_generate.params.style]:
        styles.join(','),
      [eventTracking.choose_style_click_generate.params.session_id]: sessionId,
    });
    setCookie('numberStyle', currentGenerate?.priceInfo?.metadata?.numberStyle);
    handleGenerate();
  };

  useEffect(() => {
    analyticsLogEvent(eventTracking.choose_style_view.name, {
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
                    styles.includes(item.alias) && 'style-active'
                  } item-style`}
                >
                  <img className="image-style" src={item.thumbnail} alt="" />
                  <div className="name-style">{item.displayName}</div>
                  <Checkbox
                    checked={styles.includes(item?.alias)}
                    className="checkbox"
                  />
                </div>
              ))}
        </div>
      </div>
      <div className="btn-generate">
        <Button
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
