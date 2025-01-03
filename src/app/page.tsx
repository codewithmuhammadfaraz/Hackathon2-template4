
import Footer from "./components/footer";
import Home from "./components/home";
import Latest from "./components/latest";
import Products from "./components/products";
import Offer from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import Newslater from "./components/Newslater";
import BlogSection from "./components/BlogSection";
import Header from "./components/Header";
import Navbar from "./components/navbar";



const Page = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Home />
            <Products /> {/* Corrected component name */}
            <Latest />
            <Offer />
            <Unique />
            <TrendingProducts />
            <Discount />
            <TopCategories />
            <Newslater />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Page;

