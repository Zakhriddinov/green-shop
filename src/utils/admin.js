import useId from '../hooks/useId';
import Generic from '../pages/Generic';
import UserIcon from '../assets/icons/userIcon.svg'
import ReportIcon from '../assets/icons/report.svg'
import AdminUserListPage from '../pages/Admin/AdminUserList';
import AdminProductList from '../components/Admin/ProductList';
import OrdersList from '../components/Admin/OrdersList';

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
      element: <AdminProductList />,
      title: "Products",
      Icon: ReportIcon,
      hidden: false,
      privat: true
   },
   {
      id: useId,
      path: "/admin/orders",
      element: <OrdersList />,
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
   },
]
export default admin