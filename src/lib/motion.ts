import { Variants, Easing } from "framer-motion";

export const premiumEasing: Easing = [0.16, 1, 0.3, 1]; // Custom cubic-bezier for luxury feel

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEasing,
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const textReveal: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: premiumEasing,
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: premiumEasing,
    },
  },
};
