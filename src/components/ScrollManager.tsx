import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type Props = {
  section: number;
  onSectionChange: React.Dispatch<React.SetStateAction<number>>;
};

export const ScrollManager = ({ section, onSectionChange }: Props) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const curSection = Math.floor(data.offset * data.pages);
    const sectionHeight = data.el.clientHeight;

    switch (curSection) {
      case 0:
        if (data.offset > lastScroll.current) {
          onSectionChange(1);
          data.el.scrollTo(0, section * sectionHeight);
          lastScroll.current = data.offset;
        }
        break;

      case 1:
        if (data.offset > lastScroll.current &&
          data.offset > 1 / (data.pages - 1)) {
          onSectionChange(2);
          data.el.scrollTo(0, section * sectionHeight);
          lastScroll.current = data.offset;
        } else if (
          data.offset < lastScroll.current &&
          data.offset < 1 / (data.pages - 1)
        ) {
          onSectionChange(0);
          data.el.scrollTo(0, section * sectionHeight);
        }
        break;

      case 2:
        if (data.offset > lastScroll.current &&
          data.offset >2 / (data.pages - 1)) {
          onSectionChange(3);
          data.el.scrollTo(0, section * sectionHeight);
        } else if (
          data.offset < lastScroll.current &&
          data.offset < 2 / (data.pages - 1)
        ) {
          onSectionChange(1);
          data.el.scrollTo(0, section * sectionHeight);
        }
        break;

      case 3:
        if (
          data.offset < lastScroll.current &&
          data.offset < 3 / (data.pages - 1)
        ) {
          onSectionChange(2);
          data.el.scrollTo(0, section * sectionHeight);
        }
        break;

      default:
        break;
    }

    lastScroll.current = data.offset;
  });

  return null;
};