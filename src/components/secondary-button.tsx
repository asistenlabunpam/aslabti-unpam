import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  /** Text content (alias for children, backward compatible) */
  text?: React.ReactNode;
  /** Children content */
  children?: React.ReactNode;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Icon placement relative to label. Defaults to 'left'. */
  iconPosition?: "left" | "right";
  /** Button size variant. Defaults to 'md'. */
  size?: "sm" | "md" | "lg";
  /** Optional custom className */
  className?: string;
};

export type SecondaryButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const sizeVariants = {
  sm: "text-sm px-6 py-2.5 gap-2",
  md: "text-lg px-9 py-4 gap-2.5",
  lg: "text-xl px-10 py-4.5 gap-3",
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
    "inline-flex items-center justify-center w-max h-auto font-medium rounded-full shadow-xs transition-all duration-300 cursor-pointer select-none",
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