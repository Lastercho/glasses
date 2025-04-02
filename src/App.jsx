import HeaderSection from "./containers/HeaderSection.jsx";
import BannerSection from "./containers/BannerSection.jsx";
import AboutSection from "./containers/AboutSection.jsx";
import ProductSection from "./containers/productManagment/ProductSection.jsx";
import PromoSection from "./containers/PromoSection.jsx";

import ContactSection from "./containers/ContactSection.jsx";
import SectionFooter from "./containers/SectionFooter.jsx";
import CopyrightSection from "./containers/CopyrightSection.jsx";

import { Route, Routes } from "react-router";
import Login from "./containers/userManagement/Login.jsx";
import Register from "./containers/userManagement/Register.jsx";
import NotFound from "./containers/NotFound.jsx";
import CommentsSection from "./containers/commentsManagement/CommentsSection.jsx";
import Logout from "./containers/userManagement/Logout.jsx";
import UserProvider from "./containers/providers/UserProvider";
import AuthGuard from "./containers/auth/AuthGuard.jsx";
import AddOrEditProduct from "./containers/productManagment/AddOrEditProduct.jsx";
// import Test from "./containers/Test.jsx";

export default function App() {
  return (
    <UserProvider>
      <>
        <HeaderSection />
        {/* <Test /> */}

        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<BannerSection />} />

          <Route path="/about" element={<AboutSection />} />

          <Route path="/products" element={<ProductSection />} />

          <Route path="/addproduct" element={<AddOrEditProduct />} />

          <Route path="/comments" element={<CommentsSection />} />

          <Route element={<AuthGuard />}>
            <Route path="/promotions" element={<PromoSection />} />
          </Route>

          <Route path="/contact" element={<ContactSection />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route element={<AuthGuard />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
        <SectionFooter />

        <CopyrightSection />
      </>
    </UserProvider>
  );
}
