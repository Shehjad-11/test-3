// @/components/radial-progress.tsx
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RadialProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
}

export function RadialProgress({
  value,
  size = 120,
  strokeWidth = 10,
  className,
  ...props
}: RadialProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress
    const animation = requestAnimationFrame(() => setProgress(value));
    return () => cancelAnimationFrame(animation);
  }, [value]);

  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const scoreColor =
    progress < 40 ? "text-destructive" : progress < 70 ? "text-yellow-500" : "text-green-500";

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg className="absolute inset-0" width={size} height={size}>
        <circle
          className="text-muted"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className={cn(
            "transition-all duration-1000 ease-out",
            scoreColor
          )}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("text-3xl font-bold font-headline", scoreColor)}>
          {Math.round(progress)}
        </span>
      </div>
    </div>
  );
}
