import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type Props = {
  section: number;
  onSectionChange: React.Dispatch<React.SetStateAction<number>>;
};

export const ScrollManager = ({ section, onSectionChange }:Props) => {

  const data = useScroll();
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    function onScroll(event:any) {
      if (isAnimating.current) {
        return ;
      }
      isAnimating.current = true;
      if (event.deltaY < 0)
        {
          onSectionChange((section) => section > 0 ? section - 1 : 0);
        }
        else if (event.deltaY > 0)
        {
          onSectionChange((section) => section === 3 ? 3 : section + 1);
        }
    }
    window.addEventListener('wheel', onScroll);
    window.addEventListener('keyboard', onScroll);
    return () => {
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('keyboard', onScroll);
    }
  }, []);

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);


  return null;
};