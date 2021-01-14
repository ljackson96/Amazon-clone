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
    if (!products) {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.products[0]);
          setProducts(response.data.products[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  });

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2021/Jan_default_onsite/XCM_Manual_1302634-gw_desk_tall-control-en-2x_56692bd7-443d-4ff8-a7c2-09ed2ae16e64._CB411473854_.png"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="123"
          title="test"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iADdtXixL._AC_UL320_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
