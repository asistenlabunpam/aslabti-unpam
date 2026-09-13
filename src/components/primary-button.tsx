import React, { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  /** Text content (alias for children, backward compatible) */
  text?: React.ReactNode;
  /** Children content */
  children?: React.ReactNode;
  /** Custom icon to replace the default animated arrow */
  icon?: React.ReactNode;
  /** Whether to show the arrow badge. Defaults to true. */
  showArrow?: boolean;
  /** Button size variant. Defaults to 'md'. */
  size?: "sm" | "md" | "lg";
  /** Optional custom className for the outer container */
  className?: string;
  /** Optional custom className for the inner pill */
  innerClassName?: string;
};

export type PrimaryButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

const sizeVariants = {
  sm: {
    outer: "p-1",
    inner: "gap-2 pl-5 pr-1.5 py-1.5 shadow-md shadow-blue-500/30",
    text: "text-sm",
    arrowWrapper: "size-6",
    arrowIcon: "size-4 p-0.5",
  },
  md: {
    outer: "p-1.25",
    inner: "gap-3 pl-7 pr-2 py-2 shadow-lg shadow-blue-500/40",
    text: "text-lg",
    arrowWrapper: "size-8",
    arrowIcon: "size-6 p-1",
  },
  lg: {
    outer: "p-1.5",
    inner: "gap-4 pl-8 pr-2.5 py-2.5 shadow-xl shadow-blue-500/40",
    text: "text-xl",
    arrowWrapper: "size-9",
    arrowIcon: "size-7 p-1",
  },
};

export const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>(function PrimaryButton(
  {
    text,
    children,
    icon,
    showArrow = true,
    size = "md",
    className,
    innerClassName,
    ...props
  },
  ref
) {
  const content = children ?? text ?? "Get started";
  const currentSize = sizeVariants[size];

  const outerClasses = cn(
    "group/start inline-flex h-auto w-max items-center justify-center rounded-full bg-transparent font-medium ring-1 ring-neutral-200 transition-all duration-300",
    "cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    currentSize.outer,
    className
  );

  const innerElement = (
    <div
      className={cn(
        "flex items-center justify-center bg-blue-500 rounded-full transition-all duration-300 group-hover/start:shadow-blue-500/60 group-hover/start:bg-blue-600",
        currentSize.inner,
        innerClassName
      )}
    >
      <span
        className={cn(
          "text-neutral-100 font-medium transition-colors duration-100 ease-in-out",
          currentSize.text
        )}
      >
        {content}
      </span>

      {icon ? (
        <div
          className={cn(
            "relative flex items-center justify-center bg-neutral-100 text-neutral-800 rounded-full transition-transform duration-300 group-hover/start:scale-105",
            currentSize.arrowWrapper
          )}
        >
          {icon}
        </div>
      ) : showArrow ? (
        <div
          className={cn(
            "relative flex items-center justify-center bg-neutral-100 overflow-hidden rounded-full transition-transform duration-100",
            currentSize.arrowWrapper
          )}
        >
          <div className="absolute left-0 flex w-14 h-7 -translate-x-1/2 items-center justify-center transition-transform duration-500 ease-in-out group-hover/start:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "mx-auto transform text-neutral-800 opacity-0 group-hover/start:opacity-100",
                currentSize.arrowIcon
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "mx-auto transform text-neutral-800 opacity-100 transition-transform duration-300 ease-in-out group-hover/start:opacity-0",
                currentSize.arrowIcon
              )}
            />
          </div>
        </div>
      ) : null}
    </div>
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={outerClasses}
        {...anchorProps}
      >
        {innerElement}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={outerClasses}
      {...buttonProps}
    >
      {innerElement}
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";
