import React from 'react';
import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const {scrollProgress} = useWrapperScroll()

  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{opacity}} >
        <ul>
          <li>
            <a href="#">UI CLone</a>
          </li>
          <li>
            <a href="#">Made in</a>
          </li>
          <li>
            <a href="#">By Titto Paixão</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
