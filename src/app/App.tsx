import "./styles/index.scss";

import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
