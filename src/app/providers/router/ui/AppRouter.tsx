import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routeConfig.map((route, idx) => (
          <Route
            key={idx}
            {...route}
            element={
              <Suspense fallback={<div>loading...</div>}>
                <div className="page-wrapper">{route.element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
