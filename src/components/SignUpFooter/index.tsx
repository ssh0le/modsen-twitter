import { FC } from 'react';

import { signUpFooterLinks } from '@/constants/links';

import { FooterLinkList, FooterWrapper, LinkWrapper } from './styled';

const SignUpFooter: FC = () => {
  return (
    <FooterWrapper>
      <FooterLinkList>
        {signUpFooterLinks.map((link, index) => (
          <LinkWrapper key={index}>{link}</LinkWrapper>
        ))}
      </FooterLinkList>
    </FooterWrapper>
  );
};

export default SignUpFooter;
