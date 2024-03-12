import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.1;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef();
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    if (cursorOutline.current) {
      cursorOutline.current.style.left = `${outlineX}px`;
      cursorOutline.current.style.top = `${outlineY}px`;
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", mouseEventsListener);
    const animateEvent = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.parentElement.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "input" ||
        e.target.tagName.toLowerCase() === "textarea"
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", mouseEventListener);

    return () => {
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none
         transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-blue-palette-600 w-5 h-5"
            : "bg-blue-palette-300 w-4 h-4"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};
