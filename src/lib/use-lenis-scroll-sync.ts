import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function useLenisScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      window.dispatchEvent(new Event("scroll", { bubbles: false }));
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);
}
