import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { FaShoppingBag } from "react-icons/fa";
import model from "../assets/model.png";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-scroll";

const Header = (props) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <div className="h-32 flex items-center justify-between px-[55px] sm:px-[100px] lg:px-[200px] bg-slate-700">
        <div className="flex items-center justify-center">
          <img className="max-h-12" src={logo} alt="Ebuy" />
          <h1 className="text-3xl text-logoBlue font-bold">buy</h1>
        </div>
        <div
          onClick={props.onOpenCart}
          className="hover:opacity-75 duration-300 ease-out"
        >
          <button className="relative">
            <FaShoppingBag size="2em" color="#15b9f0" />
          </button>
          <div className="absolute bg-logoBlue h-[20px] w-[20px] rounded-full flex items-center justify-center text-white top-[70px] right-[45px] sm:right-[90px] lg:right-[190px] text-[14px]">
            <p>{cartItems.length}</p>
          </div>
        </div>
      </div>
      <div
        onClick={props.onCloseCart}
        className="flex sm:gap-16 pl-2 bg-slate-200 h-[400px] items-start justify-center pt-4 overflow-hidden"
      >
        <div className="h-full flex flex-col items-center justify-center text-[20px] sm:text-[40px] font-bold text-slate-700">
          <h1>Summer Sale</h1>
          <h2 className="mb-8">
            Up to <span className="text-green-500">-70% Off</span>
          </h2>
          <button className="text-[12px] sm:text-[14px] text-white font-semibold p-2 bg-logoBlue rounded-full hover:bg-slate-700 duration-300">
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              Shop Now
            </Link>
          </button>
        </div>
        <img
          src={model}
          alt="model"
          className="h-3/4 sm:h-full relative bottom-[-100px] left-[15px] sm:left-0 sm:bottom-[-1px]"
        />
      </div>
    </>
  );
};

export default Header;
