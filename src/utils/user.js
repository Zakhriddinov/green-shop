import React from 'react';
import useId from '../hooks/useId';
import Generic from '../pages/Generic';
import UserIcon from '../assets/icons/userIcon.svg'
import Heart from '../assets/icons/userHeart.svg'
import Orders from '../assets/icons/cart.svg'
import AccountDetailsPage from '../pages/AccountDetails';
import ProfileOrders from '../components/Profile/ProfileOrders';

const userRoute = [
   {
      id: useId,
      path: "/profile/account-details",
      element: <AccountDetailsPage />,
      title: 'Account Details',
      Icon: UserIcon,
      privat: true,
      hidden: false,
   },
   {
      id: useId,
      path: "/profile/orders",
      element: <ProfileOrders />,
      title: 'Orders',
      Icon: Orders,
      privat: true,
      hidden: false,
   },
   {
      id: useId,
      path: "/profile/wishlist",
      element: <Generic />,
      title: 'Wishlist',
      Icon: Heart,
      privat: true,
      hidden: false,
   }
]
export default userRoute