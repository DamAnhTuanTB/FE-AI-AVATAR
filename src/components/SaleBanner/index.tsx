import React from 'react';
import {
  BannerContent,
  BannerLink,
  BannerLinkWrapper,
  BannerWrapper,
  Wrapper,
} from './styles';
import ArrowRight from '../Icons/ArrowRight';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  src: string;
}

export default function SaleBanner({ src }: PropsType) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <BannerWrapper
        onClick={() => {
          navigate(src);
        }}
      >
        <BannerContent>Limited Time Deal! Get Up to 50% off</BannerContent>
        <BannerLinkWrapper>
          <BannerLink>Grab deal</BannerLink>
          <ArrowRight />
        </BannerLinkWrapper>
      </BannerWrapper>
    </Wrapper>
  );
}
