import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
}

export function PrimaryButton({
  text = "Get started",
  className,
}: IGetStartedButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "group/start h-auto w-max rounded-full bg-transparent p-1.25 font-medium ring-1 ring-neutral-200",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-3 pl-7 p-2 bg-blue-500 rounded-full shadow-md shadow-blue-500/50">
        <span
          className="text-lg text-neutral-100 transition-colors duration-100 ease-in-out"
        >
          {text}
        </span>
        <div
          className="relative flex size-8 items-center justify-center bg-neutral-100 overflow-hidden rounded-full transition-transform duration-100"
        >
          <div className="absolute left-0 flex w-14 h-7 -translate-x-1/2 items-center justify-center transition-transform duration-500 ease-in-out group-hover/start:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "size-6 mx-auto transform p-1 text-neutral-800 opacity-0 group-hover/start:opacity-100",
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "size-6 mx-auto transform p-1 text-neutral-800 opacity-100 transition-transform duration-300 ease-in-out group-hover/start:opacity-0",
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
