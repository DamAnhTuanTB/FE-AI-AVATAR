import React from 'react';
import { ContentWrapper, Links, Wrapper } from './styles';

export default function HomePageFooter() {
  return (
    <Wrapper>
      <ContentWrapper>
        <p>© 2023 by VisionLab., Inc. All Rights Reserved.</p>
        <Links>
          <a href="" target="_blank">
            Privacy Policy
          </a>
          <a href="" target="_blank">
            Terms of Services
          </a>
          <a href="" target="_blank">
            Contact Us
          </a>
        </Links>
      </ContentWrapper>
    </Wrapper>
  );
}
