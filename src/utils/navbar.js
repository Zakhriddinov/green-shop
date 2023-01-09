import React from 'react';
import useId from '../hooks/useId';
import Generic from '../pages/Generic';

import HomeIcon from '../assets/icons/home.svg'
import BagIcon from '../assets/icons/bag.svg'
import UserIcon from '../assets/icons/user.svg'
import FavoritesIcon from '../assets/icons/favorites.svg'
import CartPage from '../pages/Cart';

const HomePage = React.lazy(() => import("../pages/Home"));
const ProductDetailsPage = React.lazy(() => import("../pages/ProductDetails"));
const ProfilePage = React.lazy(() => import("../pages/Profile"));
// const AdminPage = React.lazy(() => import("../pages/Admin"));

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
      privat: false,
      hidden: false,
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
      privat: false,
      hidden: true,
      mobile: false
   },
   {
      id: useId,
      path: "/favorites",
      element: <Generic />,
      title: 'Favorites',
      Icon: FavoritesIcon,
      privat: false,
      hidden: false,
      mobile: false
   },
   {
      id: useId,
      path: "/shopping-cart",
      element: <CartPage />,
      title: 'Basket',
      Icon: BagIcon,
      privat: false,
      hidden: false,
      basket: true,
      mobile: false
   },
   {
      id: useId,
      path: "/profile",
      element: (
         <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
            <ProfilePage />
         </React.Suspense>
      ),
      title: 'Profile',
      Icon: UserIcon,
      privat: true,
      hidden: false,
      mobile: false,
   }
]
export default navbar;