import React from 'react';
import useId from '../hooks/useId';
import Generic from '../pages/Generic';

import HomeIcon from '../assets/icons/home.svg'
import BagIcon from '../assets/icons/bag.svg'
import UserIcon from '../assets/icons/user.svg'
import FavoritesIcon from '../assets/icons/favorites.svg'

const HomePage = React.lazy(() => import("../pages/Home"));
const ProductDetailsPage = React.lazy(() => import("../pages/ProductDetails"));

const navbar = [
   {
      id: useId,
      path: "/home",
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <HomePage />
         </React.Suspense>
      ),
      title: "Home",
      Icon: HomeIcon,
      private: false,
      hidden: false
   },
   {
      id: useId,
      path: "/products/:id",
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <ProductDetailsPage />
         </React.Suspense>
      ),
      title: 'Products',
      Icon: HomeIcon,
      private: false,
      hidden: true,
      mobile: false
   },
   {
      id: useId,
      path: "/favorites",
      element: <Generic />,
      title: 'Favorites',
      Icon: FavoritesIcon,
      private: false,
      hidden: false,
      mobile: false
   },
   {
      id: useId,
      path: "/shopping-cart",
      element: <Generic />,
      title: 'Basket',
      Icon: BagIcon,
      private: false,
      hidden: false,
      basket: true,
      mobile: false
   },
   {
      id: useId,
      path: "/profile",
      element: <Generic />,
      title: 'Profile',
      Icon: UserIcon,
      private: true,
      hidden: false,
      mobile: false
   }
]
export default navbar;