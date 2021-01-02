import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useTransform } from 'framer-motion';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  model:CarModel
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">

const ModelOverlay: React.FC<Props> = ({model, children}) => {

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop:model.sectionRef.current?.offsetTop,
      offsetHeight:model.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef])
  
  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onRezise(){
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions))
    }
    
    window.addEventListener("resize", onRezise)
    
    return () => window.removeEventListener("resize", onRezise)
  }, [])

  const {scrollY} = useWrapperScroll()

  const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight )

  const opacity = useTransform(sectionScrollProgress, [-0.42, -0.05, 0.05, 0.042], [0, 1, 1, 0])

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? "auto" : "none"
  )

  return (
    <Container style={{opacity, pointerEvents}}>
      {children}
    </Container>
  );
};

export default ModelOverlay;
