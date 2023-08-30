import { useQuery } from 'react-query';
import { Wrapper } from './style';
import generateService from '@/services/generate.service';
import Button from '../Button';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import { useEffect } from 'react';

interface IProps {
  setStep: (step: number) => void;
  styles: any;
  setStyles: any;
  gender: string;
  listStyles: any;
  setListStyles: any;
}

export default function Step3({
  setStep,
  styles,
  setStyles,
  gender,
  listStyles,
  setListStyles,
}: IProps) {
  useEffect(() => {
    if (
      localStorage.getItem('passGender') &&
      localStorage.getItem('passGender') !== gender
    ) {
      setStyles([]);
    }
  }, []);
  useQuery(['get-list-style'], () => generateService.getListStyles(), {
    onSuccess: (res: any) => {
      const stylesFilter = res?.data?.data?.values[gender.toLowerCase()] || [];

      const listStyles = stylesFilter.map((style: any) => ({
        id: style._id,
        thumbnail:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hIGZLu2ePulh7ycFBxMhkE_2SccWiRqCOKP9SQRbcjMPnaNsrC3FjhcLEci7r-Jg4IQ&usqp=CAU',
        alias: style.alias,
        displayName: style.displayName,
      }));

      setListStyles(listStyles);
    },
  });
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
