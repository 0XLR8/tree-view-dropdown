import React from "react";

export const TreeNodeToggle = React.forwardRef(({ children, onClick }: {children: React.ReactNode, onClick: (e: React.SyntheticEvent) => void}, ref) => (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));
  