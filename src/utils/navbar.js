import React from 'react';
import useId from '../hooks/useId';
import Generic from '../pages/Generic';

const HomePage = React.lazy(() => import("../pages/Home"));

const navbar = [
   {
      id: useId,
      path: "/",
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <HomePage />
         </React.Suspense>
      ),
      title: "Home",
      private: false,
      hidden: false
   },
   {
      id: useId,
      path: "/products",
      element: <Generic />,
      title: 'Products',
      private: false,
      hidden: false
   }
]
export default navbar;