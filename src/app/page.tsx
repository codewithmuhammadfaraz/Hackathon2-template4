import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Latest from "./components/latest";
import Products from "./components/products";



const Page = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Home />
            <Products /> {/* Corrected component name */}
            <Latest />
            <main>
                <h1>Welcome to Our E-commerce Site</h1>
                <p>Your content goes here.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Page;

