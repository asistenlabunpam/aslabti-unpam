import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function useLenisScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    let isSyncing = false;
    const onScroll = () => {
      if (isSyncing) return;
      isSyncing = true;
      window.dispatchEvent(new Event("scroll", { bubbles: false }));
      isSyncing = false;
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);
}
