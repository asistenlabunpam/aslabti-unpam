import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { AppHeader } from "./components/app-header";
import { AppFooter } from "./components/app-footer";
import Page from "./page";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.3,
      }}
    >
      <AppHeader />
      <main className="">
        <Page />
      </main>
      <AppFooter />
    </ReactLenis>
  </StrictMode>,
);
