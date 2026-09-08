export const VIEWPORT = { once: true, margin: "-80px" };
export const VIEWPORT_TIGHT = { once: true, margin: "-40px" };

export const TRANSITION_BASE = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };
export const TRANSITION_SLOW = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };
export const TRANSITION_SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: TRANSITION_BASE },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: TRANSITION_BASE },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: TRANSITION_BASE },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: TRANSITION_BASE },
};

export const fadeLeftSm = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: TRANSITION_BASE },
};

export const fadeRightSm = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: TRANSITION_BASE },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...TRANSITION_BASE, duration: 0.8 } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: TRANSITION_BASE },
};

export const scaleUpSpring = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: TRANSITION_SPRING },
};

export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: TRANSITION_BASE },
};

export const staggerItemLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: TRANSITION_BASE },
};

export const cardHoverY = -6;
export const cardHoverShadow = "0 16px 40px rgba(0,0,0,0.12)";
