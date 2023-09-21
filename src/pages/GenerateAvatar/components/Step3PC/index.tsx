import { useEffect } from 'react';
import { Wrapper } from './style';
import Button from '../Button';
import { ToastError } from '@/components/ToastMessage/ToastMessage';

interface IProps {
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  price: any;
  handleGenerate: any;
}

export default function Step3PC({
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

  const handleClickStyle = (alias: string) => {
    const index = styles.findIndex((style: string) => style === alias);
    if (index !== -1) {
      styles.splice(index, 1);
    } else {
      if (styles.length > 19) {
        // price.maxStyle - 1
        ToastError('The maximum quantity has been selected.');
      } else {
        styles.push(alias);
      }
    }
    setStyles([...styles]);
  };

  const handleClickNext = () => {
    handleGenerate();
  };

  return (
    <Wrapper>
      <div className="title">Choose styles</div>
      <div className="description">Choose up to 20 avatar styles</div>
      <div className="parent-list-styles">
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
