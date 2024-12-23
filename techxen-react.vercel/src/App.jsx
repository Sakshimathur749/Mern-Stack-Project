import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Blog from './pages/Blog'
import BlogDetails from "./pages/BlogDetails";
import Career from './pages/Career'
import Product from "./pages/Product";
import Portfolio from "./pages/Portfolio";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/career" element={<Career/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/service/:serviceName" element={<ServiceDetails/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog-details" element={<BlogDetails/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/getquotes" element={<Newsletter/>}></Route>
        </Routes>
        <Cta />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;