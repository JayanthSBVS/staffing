import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06
    }
  }
};

export const scaleOnHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 18px 55px rgba(0, 0, 0, 0.22)"
  },
  hover: {
    scale: 1.04,
    y: -8,
    borderColor: "#0F766E",
    boxShadow: "0 28px 80px rgba(0, 0, 0, 0.52)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const buttonHover: Variants = {
  rest: {
    y: 0
  },
  hover: {
    y: -2,
    boxShadow: "0 18px 42px rgba(15, 118, 110, 0.34)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};
