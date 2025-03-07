import './App.css'
import HeaderSection from "./containers/headerSection.jsx";
import BannerSection from "./containers/bannerSection.jsx";
import AboutSection from "./containers/aboutSection.jsx";
import ProductSection from "./containers/productSection.jsx";
import PromoSection from "./containers/promoSection.jsx";
import TestimonialSection from "./containers/testimonialSection.jsx";
import ContactSection from "./containers/contactSection.jsx";
import SectionFooter from "./containers/sectionFooter.jsx";
import CopyrightSection from "./containers/copyrightSection.jsx";
import Test from "./containers/test.jsx";


function App() {

    return (



        <>


            <HeaderSection/>

            {/*<Test />*/}

            <BannerSection/>

            <AboutSection/>

            <ProductSection/>

            <PromoSection/>

            <TestimonialSection/>

            <ContactSection/>

            <SectionFooter/>

            <CopyrightSection/>

        </>


    )
}

export default App
