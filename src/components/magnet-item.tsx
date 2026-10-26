import { useEffect } from "react";

export function GlobalMagnet() {
  useEffect(() => {
    const isHoverableDevice = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!isHoverableDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll<HTMLElement>("[data-magnet]");

      elements.forEach((el) => {
        if (el.hasAttribute("data-magnet-disabled")) {
          el.style.transform = `translate3d(0px, 0px, 0)`;
          return;
        }

        const padding = Number(el.dataset.magnetPadding) || 100;
        const strength = Number(el.dataset.magnetStrength) || 2;
        const activeTrans =
          el.dataset.magnetActive || "transform 0.3s ease-out";
        const inactiveTrans =
          el.dataset.magnetInactive || "transform 0.5s ease-in-out";

        const rect = el.getBoundingClientRect();

        const currentX = parseFloat(el.dataset.magnetX!) || 0;
        const currentY = parseFloat(el.dataset.magnetY!) || 0;

        const centerX = rect.left - currentX + rect.width / 2;
        const centerY = rect.top - currentY + rect.height / 2;

        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        if (
          distX < rect.width / 2 + padding &&
          distY < rect.height / 2 + padding
        ) {
          const offsetX = (e.clientX - centerX) / strength;
          const offsetY = (e.clientY - centerY) / strength;

          el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
          el.style.transition = activeTrans;
          el.style.willChange = "transform";

          el.dataset.magnetX = offsetX.toString();
          el.dataset.magnetY = offsetY.toString();
        } else {
          el.style.transform = `translate3d(0px, 0px, 0)`;
          el.style.transition = inactiveTrans;

          el.dataset.magnetX = "0";
          el.dataset.magnetY = "0";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
