import useId from '../hooks/useId';
import Generic from '../pages/Generic';
import UserIcon from '../assets/icons/userIcon.svg'

const admin = [
   {
      id: useId,
      path: "/admin/users",
      element: <Generic />,
      title: "Users",
      Icon: <UserIcon />,
      hidden: false,
      privat: true
   }
]
export default admin