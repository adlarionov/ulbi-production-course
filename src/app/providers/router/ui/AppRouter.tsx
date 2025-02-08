import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map((route, idx) => (
        <Route
          key={idx}
          {...route}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{route.element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
