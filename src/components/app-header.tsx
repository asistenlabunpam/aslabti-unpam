import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { logo as defaultLogo } from "@/constants";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo?: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string | number[];
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: "Beranda",
    href: "#beranda",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "Tentang",
    href: "#tentang",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Mata Kuliah",
    href: "#mata-kuliah",
    ariaLabel: "Courses",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "Galeri",
    href: "#galeri",
    ariaLabel: "Documentation",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "Kontak",
    href: "#kontak",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

function parseEase(ease?: string | number[]): any {
  if (!ease) return [0.34, 1.5, 0.64, 1];
  if (Array.isArray(ease)) return ease;
  if (typeof ease === "string") {
    if (ease.startsWith("back.out") || ease.startsWith("backOut")) {
      const match = ease.match(/back(?:\.out|Out)\(([\d.]+)\)/);
      const overshoot = match ? parseFloat(match[1]) : 1.5;
      return [0.34, 1 + (overshoot - 1) * 1.0, 0.64, 1];
    }
    if (ease === "power3.out" || ease === "easeOut")
      return [0.215, 0.61, 0.355, 1];
    if (ease === "power3.in" || ease === "easeIn")
      return [0.55, 0.055, 0.675, 0.19];
    if (ease === "power3.inOut" || ease === "easeInOut")
      return [0.645, 0.045, 0.355, 1];
    if (ease === "power2.out") return [0.25, 0.46, 0.45, 0.94];
    if (ease === "power2.in") return [0.55, 0.085, 0.68, 0.53];
    return ease;
  }
  return ease;
}

export function BubbleMenu({
  logo = defaultLogo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  useFixedPosition = true,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 900 : true,
  );

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const bubbleEase = parseEase(animationEase);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        onMenuClick?.(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, onMenuClick]);

  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    "left-0 right-0 top-5",
    "flex items-center justify-between",
    "gap-4 px-8",
    "pointer-events-none",
    "z-[1001]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: MenuItem,
  ) => {
    // 1. Trigger animated exit
    setIsMenuOpen(false);
    onMenuClick?.(false);

    // 2. Resolve link target
    let target = item.href;
    if (!target || target === "#" || target === "") {
      const lower = item.label.toLowerCase();
      if (lower === "home" || lower === "beranda") target = "#beranda";
      else if (lower === "about" || lower === "tentang") target = "#tentang";
      else if (
        lower === "projects" ||
        lower === "gallery" ||
        lower === "galeri"
      )
        target = "#galeri";
      else if (
        lower === "courses" ||
        lower === "mata kuliah" ||
        lower === "matakuliah"
      )
        target = "#mata-kuliah";
      else if (lower === "blog" || lower === "aktivitas") target = "#aktivitas";
      else if (lower === "contact" || lower === "kontak") target = "#kontak";
    }

    if (target && target.startsWith("#")) {
      e.preventDefault();
      const id = target.substring(1);
      if (!id || id === "beranda" || id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link:hover {
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:hover .pill-label {
            color: var(--hover-color) !important;
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 120px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list {
            row-gap: 16px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3vw, 4rem);
            padding: clamp(1rem, 2vw, 2rem) 0;
            min-height: 80px !important;
          }
          .bubble-menu-items .pill-link:hover {
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:hover .pill-label {
            color: var(--hover-color);
          }
        }
      `}</style>

      <nav
        className={containerClassName}
        style={style}
        aria-label="Main navigation"
      >
        <motion.div
          className={[
            "bubble logo-bubble",
            "inline-flex items-center justify-center",
            "rounded-full",
            "bg-neutral-50",
            "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
            "pointer-events-auto",
            "h-12 md:h-14",
            "px-3",
            "gap-2",
            "will-change-transform",
            "cursor-pointer",
          ].join(" ")}
          aria-label="Logo"
          style={{
            background: menuBg,
            minHeight: "48px",
            borderRadius: "9999px",
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (isMenuOpen) setIsMenuOpen(false);
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
        >
          <span
            className={[
              "logo-content",
              "inline-flex items-center justify-center",
              "w-[120px] h-full",
            ].join(" ")}
            style={
              {
                ["--logo-max-height"]: "60%",
                ["--logo-max-width"]: "100%",
              } as CSSProperties
            }
          >
            {typeof logo === "string" ? (
              <img
                src={logo}
                alt="Logo"
                className="bubble-logo max-h-[60%] max-w-full object-contain block"
              />
            ) : (
              logo
            )}
          </span>
        </motion.div>

        <motion.button
          type="button"
          className={[
            "bubble toggle-bubble menu-btn",
            isMenuOpen ? "open" : "",
            "inline-flex flex-col items-center justify-center",
            "rounded-full",
            "bg-white",
            "shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
            "pointer-events-auto",
            "w-12 h-12 md:w-14 md:h-14",
            "border-0 cursor-pointer p-0",
            "will-change-transform",
          ].join(" ")}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: menuBg }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.92, transition: { duration: 0.1 } }}
        >
          <span
            className="menu-line block mx-auto rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="menu-line short block mx-auto rounded-[2px]"
            style={{
              marginTop: "6px",
              width: 26,
              height: 2,
              background: menuContentColor,
              transform: isMenuOpen
                ? "translateY(-4px) rotate(-45deg)"
                : "none",
            }}
          />
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="bubble-menu-overlay"
            className={[
              "bubble-menu-items",
              useFixedPosition ? "fixed" : "absolute",
              "inset-0",
              "flex items-center justify-center",
              "z-[1000]",
              "bg-black/10 backdrop-blur-[2px]",
            ].join(" ")}
            aria-hidden={!isMenuOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
                onMenuClick?.(false);
              }
            }}
          >
            <ul
              className={[
                "pill-list",
                "list-none m-0 px-6",
                "w-full max-w-[1600px] mx-auto",
                "flex flex-wrap",
                "gap-x-0 gap-y-1",
                "pointer-events-auto",
              ].join(" ")}
              role="menu"
              aria-label="Menu links"
            >
              {menuItems.map((item, idx) => {
                const rotation = isDesktop ? (item.rotation ?? 0) : 0;
                const bubbleDelay =
                  idx * staggerDelay + Math.sin(idx * 99) * 0.03;
                const labelDelay = bubbleDelay + animationDuration * 0.1;

                return (
                  <li
                    key={idx}
                    role="none"
                    className={[
                      "pill-col",
                      "flex justify-center items-stretch",
                      "[flex:0_0_calc(100%/3)]",
                      "box-border",
                    ].join(" ")}
                  >
                    <motion.a
                      role="menuitem"
                      href={item.href}
                      aria-label={item.ariaLabel || item.label}
                      onClick={(e) => handleItemClick(e, item)}
                      className={[
                        "pill-link",
                        "w-full",
                        "rounded-[999px]",
                        "no-underline",
                        "bg-white",
                        "text-inherit",
                        "shadow-[0_4px_14px_rgba(0,0,0,0.10)]",
                        "flex items-center justify-center",
                        "relative",
                        "transition-[background,color] duration-300 ease-in-out",
                        "box-border",
                        "whitespace-nowrap overflow-hidden",
                        "cursor-pointer",
                      ].join(" ")}
                      style={
                        {
                          ["--item-rot"]: `${rotation}deg`,
                          ["--pill-bg"]: menuBg,
                          ["--pill-color"]: menuContentColor,
                          ["--hover-bg"]:
                            item.hoverStyles?.bgColor || "#f3f4f6",
                          ["--hover-color"]:
                            item.hoverStyles?.textColor || menuContentColor,
                          background: "var(--pill-bg)",
                          color: "var(--pill-color)",
                          minHeight: "var(--pill-min-h, 160px)",
                          padding: "clamp(1.5rem, 3vw, 8rem) 0",
                          fontSize: "clamp(1.5rem, 4vw, 4rem)",
                          fontWeight: 400,
                          lineHeight: 0,
                          height: 10,
                          transformOrigin: "50% 50%",
                        } as CSSProperties
                      }
                      initial={{
                        scale: 0,
                        rotate: rotation,
                      }}
                      animate={{
                        scale: 1,
                        rotate: rotation,
                        transition: {
                          scale: {
                            duration: animationDuration,
                            ease: bubbleEase,
                            delay: bubbleDelay,
                          },
                          rotate: {
                            duration: 0.3,
                          },
                        },
                      }}
                      exit={{
                        scale: 0,
                        transition: {
                          duration: 0.2,
                          ease: [0.55, 0.055, 0.675, 0.19], // power3.in
                        },
                      }}
                      whileHover={{
                        scale: 1.06,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        scale: 0.94,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <motion.span
                        className="pill-label inline-block"
                        style={{
                          height: "1.2em",
                          lineHeight: 1.2,
                        }}
                        initial={{
                          y: 24,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: animationDuration,
                            ease: [0.215, 0.61, 0.355, 1], // power3.out
                            delay: labelDelay,
                          },
                        }}
                        exit={{
                          y: 24,
                          opacity: 0,
                          transition: {
                            duration: 0.2,
                            ease: [0.55, 0.055, 0.675, 0.19], // power3.in
                          },
                        }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { BubbleMenu as AppHeader };
export default BubbleMenu;
