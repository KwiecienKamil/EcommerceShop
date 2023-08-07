import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BsStarHalf } from "react-icons/bs";
import { ShopContext } from "../context/shop-context";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setProductsData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-slate-700 pt-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-4"
        id="products"
      >
        {loading && <h1 className="text-white">...Loading</h1>}
        {productsData.map((item) => (
          <div
            className="h-[350px] p-4 rounded-lg bg-white flex flex-col items-center justify-between py-4 cursor-default"
            key={`${item.id}99`}
          >
            <img src={item.image} className="max-h-[200px]" alt="image" />
            <p className="font-semibold max-h-[22px] overflow-hidden">
              {item.title}
            </p>
            <div className="w-full flex items-center justify-between px-4">
              <span className="p-2 bg-slate-700 text-white rounded-full flex items-center justify-center gap-[2px]">
                <BsStarHalf />
                {item.rating.rate}{" "}
              </span>
              <p className="p-2 bg-slate-700 text-white rounded-full">
                {`${item.price}$`}{" "}
              </p>
            </div>
            <button
              onClick={() =>
                addToCart(item.id, item.title, item.price, item.image)
              }
              className="px-4 py-2 bg-logoBlue text-white font-semibold rounded-full hover:bg-slate-700 duration-300"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
