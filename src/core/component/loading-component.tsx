"use client";

import React, { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Progress, ProgressTrack, ProgressIndicator } from "@/core/component/shadcn-ui/progress";

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
      <Progress value={null} className="w-full max-w-[360px] flex-nowrap">
        <ProgressTrack className={`h-1.5 ${primaryBgActive ? 'bg-background' : 'bg-background-secondary'}`}>
          <ProgressIndicator className="w-1/2 origin-left animate-progress" />
        </ProgressTrack>
      </Progress>
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

