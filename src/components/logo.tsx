// src/components/logo.tsx
import * as React from 'react';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      
      {/* Outer ring */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner hexagon */}
      <path
        d="M16 6L22 10V22L16 26L10 22V10L16 6Z"
        fill="url(#logoGradient)"
        opacity="0.8"
      />
      
      {/* Center diamond */}
      <path
        d="M16 10L20 16L16 22L12 16L16 10Z"
        fill="hsl(var(--background))"
      />
      
      {/* Connecting lines */}
      <path
        d="M16 10V6M22 10L20 16M22 22L20 16M16 22V26M10 22L12 16M10 10L12 16"
        stroke="hsl(var(--background))"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
