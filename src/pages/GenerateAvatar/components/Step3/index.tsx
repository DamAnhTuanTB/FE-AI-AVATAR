import { useEffect } from 'react';
import { Wrapper } from './style';
import Button from '../Button';
import { ToastError } from '@/components/ToastMessage/ToastMessage';

interface IProps {
  setStep: (step: number) => void;
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
}

export default function Step3({
  setStep,
  styles,
  setStyles,
  gender,
  listStyles,
}: IProps) {
  console.log('styles', styles);
  console.log('listStyles', listStyles);
  useEffect(() => {
    if (
      localStorage.getItem('passGender') &&
      localStorage.getItem('passGender') !== gender
    ) {
      setStyles([]);
    }
  }, []);

  const handleClickStyle = (alias: string) => {
    const index = styles.findIndex((style: string) => style === alias);
    if (index !== -1) {
      styles.splice(index, 1);
    } else {
      if (styles.length > 19) {
        ToastError('Selected up to 20 styles');
      } else {
        styles.push(alias);
      }
    }
    setStyles([...styles]);
  };

  const handleClickNext = () => {
    setStep(4);
  };

  return (
    <Wrapper>
      <div className="title">Choose styles</div>
      <div className="description">Choose up to 20 avatar styles</div>
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
          text="Next"
          width="100%"
          height="45px"
          disable={!styles.length}
        />
      </div>
    </Wrapper>
  );
}
