import useId from '../hooks/useId';
import Generic from '../pages/Generic';
import UserIcon from '../assets/icons/userIcon.svg'
import ReportIcon from '../assets/icons/report.svg'
import AdminUserListPage from '../pages/Admin/AdminUserList';

const admin = [
   {
      id: useId,
      path: "/admin/users",
      element: <AdminUserListPage />,
      title: "Users",
      Icon: UserIcon,
      hidden: false,
      privat: true
   },
   {
      id: useId,
      path: "/admin/products",
      element: <Generic />,
      title: "Products",
      Icon: ReportIcon,
      hidden: false,
      privat: true
   },
   {
      id: useId,
      path: "/admin/orders",
      element: <Generic />,
      title: "Orders",
      Icon: ReportIcon,
      hidden: false,
      privat: true
   },
   {
      id: useId,
      path: "/admin/analytics",
      element: <Generic />,
      title: "Analytics",
      Icon: ReportIcon,
      hidden: false,
      privat: true
   }
]
export default admin