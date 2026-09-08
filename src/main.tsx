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
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <AppHeader />
      <main className="px-4 sm:px-6 lg:px-8">
        <Page />
      </main>
      <AppFooter />
    </ReactLenis>
  </StrictMode>,
);
