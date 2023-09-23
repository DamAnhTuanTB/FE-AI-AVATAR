import { useEffect } from 'react';
import { Wrapper } from './style';
import Button from '../Button';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

interface IProps {
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  price: any;
  handleGenerate: any;
}

export default function Step3({
  styles,
  setStyles,
  gender,
  listStyles,
  price,
  handleGenerate,
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
    handleGenerate(currentGenerate?.timePayment);
  };

  return (
    <Wrapper>
      <div className="title">Choose styles</div>
      <div className="description">
        Select from a diverse range of up to{' '}
        {currentGenerate?.priceInfo?.metadata?.numberStyle} avatar styles.
      </div>
      <div className="list-styles">
        {listStyles.map((item: any) => (
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
