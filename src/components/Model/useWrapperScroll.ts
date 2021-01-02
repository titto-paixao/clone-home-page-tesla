import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll(){
  const {wrapperRef} = useContext(ModelsContext)
  
  const scrollY = useMotionValue(0)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const element = wrapperRef.current

    if(element){
      const updateScrollValues = () => {
        const { scrollHeight, scrollTop, offsetHeight } = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollProgress.set(scrollTop / fullScroll)
      }
    
      element.addEventListener("scroll", updateScrollValues)

      return () => element?.removeEventListener("scroll", updateScrollValues)
    }
  }, [scrollY, scrollProgress, wrapperRef])

  return {scrollY, scrollProgress}
}