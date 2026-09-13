import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  text?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type SecondaryButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const sizeVariants = {
  sm: "text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 gap-1.5 sm:gap-2",
  md: "text-sm sm:text-base md:text-lg px-5 sm:px-7 md:px-9 py-2.5 sm:py-3.5 md:py-4 gap-2 sm:gap-2.5",
  lg: "text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4.5 gap-2.5 sm:gap-3",
};

export const SecondaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SecondaryButtonProps
>(function SecondaryButton(
  {
    text,
    children,
    icon,
    iconPosition = "left",
    size = "md",
    className,
    ...props
  },
  ref
) {
  const content = children ?? text;

  const baseClasses = cn(
    "inline-flex items-center justify-center w-max max-w-full h-auto font-medium rounded-full shadow-xs transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    sizeVariants[size],
    className
  );

  const innerContent = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      )}
      {content && <span>{content}</span>}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      )}
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...anchorProps}
      >
        {innerContent}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={baseClasses}
      {...buttonProps}
    >
      {innerContent}
    </button>
  );
});

SecondaryButton.displayName = "SecondaryButton";