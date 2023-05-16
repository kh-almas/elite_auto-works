import React from 'react';
import Banner from "../Banner/Banner.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Footer from "../../Shared/Footer/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;