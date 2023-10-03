import generateService from '@/services/generate.service';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function useGetListStyles(gender: string, setListStyles?: any) {
  const [styles, setStyles] = useState<any>([]);
  useQuery(
    ['get-list-style', gender],
    () => {
      return generateService.getListStyles();
    },
    {
      onSuccess: (res: any) => {
        const stylesFilter =
          res?.data?.data?.values[gender.toLowerCase()] || [];

        const listStyles = stylesFilter.map((style: any) => ({
          id: style._id,
          thumbnail: style.thumbnail,
          alias: style.alias,
          displayName: style.displayName,
        }));

        if (setListStyles) {
          setListStyles(listStyles);
        }
        setStyles(listStyles);
      },
      enabled: !!gender,
    }
  );
  return styles;
}
