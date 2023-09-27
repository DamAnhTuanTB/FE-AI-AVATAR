import React from 'react';
import { ContentWrapper, Links, Wrapper } from './styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

export default function HomePageFooter() {
  return (
    <Wrapper>
      <ContentWrapper>
        <p>© 2023 by VisionLab., Inc. All Rights Reserved.</p>
        <Links>
          <Link to={ROUTES.PARIVACY_POLICY}>Privacy Policy</Link>
          <Link to={ROUTES.TERM_SERVICE}>Terms of Services</Link>
          {/* <a href="" target="_blank">
            Contact Us
          </a> */}
        </Links>
      </ContentWrapper>
    </Wrapper>
  );
}
