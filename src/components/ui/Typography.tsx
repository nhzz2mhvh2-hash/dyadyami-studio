import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "display";
  as?: React.ElementType;
}

const Typography = ({
  children,
  variant = "body",
  as: Tag = "p",
  className,
  ...props
}: TypographyProps) => {
  const variantStyles = {
    display: "text-6xl md:text-8xl font-serif tracking-tightest leading-tight",
    h1: "text-4xl md:text-6xl font-serif tracking-tightest leading-tight",
    h2: "text-3xl md:text-5xl font-serif tracking-tighter leading-snug",
    h3: "text-2xl md:text-4xl font-serif tracking-tighter",
    h4: "text-xl md:text-2xl font-serif tracking-tighter font-semibold",
    body: "text-base md:text-lg font-sans leading-relaxed text-text-primary/90",
    caption: "text-xs md:text-sm font-sans uppercase tracking-widest text-gold-muted",
  };

  return React.createElement(
    Tag,
    {
      className: cn(variantStyles[variant], className),
      ...props
    },
    children
  );
};

export default Typography;
