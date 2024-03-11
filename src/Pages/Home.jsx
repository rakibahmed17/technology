import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Components/Footer/Footer";
import CardHeadLine from "../Components/CardHeadLine";
import { useState } from "react";
import Product from "../Components/Product";


const Home = () => {
  const productData = useLoaderData();
  const [products,setProducts]=useState(productData);
  console.log(productData);
  return (
    <div>
      <Banner></Banner>
      <CardHeadLine></CardHeadLine>
      <div className="mb-10 mt-3 py-3 grid md:grid-cols-3 gap-5">
        {products.map(pro => 
          <Product key={pro._id} 
          products={products}
          setProducts={setProducts}
          
          
          product={pro}>


          </Product>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
