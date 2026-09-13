"use client";

import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type LoadingScreenProps = React.ComponentProps<"div"> & {
  portal?: boolean;
  primaryBgActive?: boolean;
};

export function LoadingScreen({
  portal,
  primaryBgActive,
  className = "",
  ...other
}: LoadingScreenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div
      className={`flex-grow w-full flex min-h-full items-center justify-center px-10 ${className}`}
      {...other}
    >
      <div 
        className={`w-full max-w-[360px] h-1.5 overflow-hidden rounded-full ${
          primaryBgActive ? 'bg-background' : 'bg-background-secondary'
        }`}
      >
        <div className="h-full bg-primary rounded-full animate-[progress_2s_ease-in-out_infinite] w-1/2 origin-left" />
      </div>
    </div>
  );

  if (portal && mounted) {
    return createPortal(content, document.body);
  }

  if (portal && !mounted) {
    return null;
  }

  return content;
}

