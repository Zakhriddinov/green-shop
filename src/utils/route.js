import React from 'react';
import useId from '../hooks/useId';

const HomePage = React.lazy(() => import("../pages/Home"));

const route = [
   {
      id: useId,
      path: "/",
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <HomePage />
         </React.Suspense>
      ),
      private: false,
      hidden: false
   }
]
export default route;