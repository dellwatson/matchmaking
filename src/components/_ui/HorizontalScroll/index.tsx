import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
export default function HorizontalScroll({ children }) {
  return (
    <div className="flexx flex-col  justify-center row border border-red-500 h-full o">
      <ScrollMenu
        Header={<div className="pt-20 h-40">HEADER</div>}
        Footer={<div>FOOTER</div>}
        onWheel={onWheel}>
        {children}
      </ScrollMenu>
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
