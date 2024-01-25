import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import AddBlog from "../pages/blog/AddBlog";
import AddBlogCategory from "../pages/blog/AddBlogCategory";
import BlogCategories from "../pages/blog/BlogCategories";
import Blogs from "../pages/blog/Blogs";
import AddBrand from "../pages/catalog/brand/AddBrand";
import Brands from "../pages/catalog/brand/Brands";
import AddCategory from "../pages/catalog/category/AddCategory";
import Categories from "../pages/catalog/category/Categories";
import AddColor from "../pages/catalog/color/AddColor";
import Colors from "../pages/catalog/color/Colors";
import AddProduct from "../pages/catalog/products/AddProduct";
import Products from "../pages/catalog/products/Products";
import Customers from "../pages/customer/Customers";
import Enquires from "../pages/enquiry/Enquires";
import AddCoupon from "../pages/marketing/AddCoupon";
import Coupons from "../pages/marketing/Coupons";
import Orders from "../pages/order/Orders";

const router = createBrowserRouter([
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add-brand",
        element: <AddBrand />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "add-color",
        element: <AddColor />,
      },
      {
        path: "colors",
        element: <Colors />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "coupons",
        element: <Coupons />,
      },
      {
        path: "add-coupon",
        element: <AddCoupon />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "add-blog-category",
        element: <AddBlogCategory />,
      },
      {
        path: "blog-categories",
        element: <BlogCategories />,
      },
      {
        path: "enquiries",
        element: <Enquires />,
      },
    ],
  },
]);

export default router;
