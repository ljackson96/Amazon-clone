import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);

  const options = {
    method: "GET",
    url:
      "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search",
    params: { keyword: "board games", country: "US", category: "aps" },
    headers: {
      "x-rapidapi-key": "ca036601damsh5819a2bc9ae9cffp14861fjsncd852ab3030f",
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.products[0]);
        // setProducts(response.data.products.slice(0, 5));
        setProducts(response.data.products.slice(0, 5));
        // productInfo(products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // const productInfo = async (products) => {
  //   console.log(products);

  //   products.map((product) => {
  //     console.log(product);
  //     <Product
  //       id="123"
  //       title={product.title}
  //       price={11.23}
  //       rating={5}
  //       image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
  //     />;
  //   });
  // };

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-2x_56692bd7-443d-4ff8-a7c2-09ed2ae16e64._CB411473854_.png"
        alt=""
      />
      {/* Product id, title, price, rating, image */}

      <div className="home_row">
        {products.forEach((product) => {
          console.log(product.title);
        })}
        <Product
          id="123456789"
          title="Becoming: A Guided Journal for Discovering Your Voice"
          price={10.97}
          rating={5}
          image={"https://m.media-amazon.com/images/I/51w4zG9Dn6L.jpg"}
        />
        <Product
          id="123456799"
          title="Asus ROG Strix Hero II Gaming Laptop, 15.6” 144Hz IPS Type, NVIDIA GeForce GTX 1060 6GB GDDR5, Intel Core i7-8750H Processor, 16GB DDR4, 256GB Pcie SSD + 1TB Hdd, RGB, Windows 10 Home - GL504GM-DS74"
          price={1699.99}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81TKu9gu%2BqL._AC_SX679_.jpg"
          }
        />
      </div>
      <div className="home_row">
        <Product
          id="123456989"
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={275.51}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
          }
        />
        <Product
          id="123496789"
          title="Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food Scale, Black"
          price={11.99}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71lbJjoQHuL._AC_SX679_.jpg"
          }
        />
        <Product
          id="123456999"
          title="Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 12 oz. Brew Sizes, Black"
          price={77.68}
          rating={4}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71tybZyMkuL._AC_SX679_.jpg"
          }
        />
      </div>
      <div className="home_row">
        <Product
          id="129956789"
          title="JBL Charge 3 Waterproof Portable Bluetooth Speaker (Black), 1"
          price={109.95}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61TSAn9KKxL._AC_SX425_.jpg"
          }
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
