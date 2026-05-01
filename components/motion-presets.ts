import type { Variants } from "framer-motion";

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const cardHover = {
  y: -8,
  scale: 1.04,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

export const buttonHover = {
  y: -2,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};
