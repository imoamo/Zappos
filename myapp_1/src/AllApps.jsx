import React from 'react';

import Navbar from "../src/components/Navbar/Navbar";
import Img from "../src/components/container_img/Img";
import Categories from "../src/components/categories/Categories";
import Product from "../src/components/products/Product";
import Product_2 from "../src/components/Product_2/Product_2";
import Footer from "../src/components/Footer/Footer";

const AllApps = () => {
    return (
        <>
            <Navbar/>
            <Img />
            <Categories />
            <Product />
            <Product_2 />
            <Footer />
        </>
    )
}

export default AllApps; 