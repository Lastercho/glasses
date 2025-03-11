import HeaderSection from "./containers/headerSection.jsx";
import BannerSection from "./containers/bannerSection.jsx";
import AboutSection from "./containers/aboutSection.jsx";
import ProductSection from "./containers/productSection.jsx";
import PromoSection from "./containers/promoSection.jsx";
import TestimonialSection from "./containers/testimonialSection.jsx";
import ContactSection from "./containers/contactSection.jsx";
import SectionFooter from "./containers/sectionFooter.jsx";
import CopyrightSection from "./containers/copyrightSection.jsx";
// import Test from "./containers/test.jsx";
// import UserManagement from "./containers/userManagement/UserManagement.jsx";
import {Route, Routes} from "react-router";
import Login from "./containers/userManagement/Login.jsx";
import Register from "./containers/userManagement/Register.jsx";


function App() {

    return (



        <>
            <HeaderSection/>

            <Routes>
                <Route path="/" element={<BannerSection/>}/>

                <Route path="/about" element={<AboutSection/>}/>

                <Route path="/products" element={<ProductSection/>}/>

                <Route path="/testimonials" element={<TestimonialSection/>}/>

                <Route path="/promotions" element={<PromoSection/>}/>

                <Route path="/contact" element={<ContactSection/>}/>

                <Route path="/login" element={<Login/>} />

                <Route path="/register" element={<Register/>} />


</Routes>
            <SectionFooter/>

            <CopyrightSection/>

        </>


    )
}

export default App
