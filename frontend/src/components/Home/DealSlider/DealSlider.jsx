import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getHomeAction } from "../../../actions/Actions";
import { getRandomProducts } from "../../../utils/functions";
import { NextBtn, PreviousBtn } from "../Banner/Banner";
import Product from "./Product";

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DealSlider = ({ title }) => {
  const dispatch = useDispatch();
  const { home, loading } = useSelector((state) => state.getHome);
  useEffect(() => {
    if (!loading && home?.length === 0) {
      dispatch(getHomeAction());
    }
  }, [dispatch, home, loading]);

  return (
    <section className="bg-white w-full shadow overflow-hidden">
      <div className="flex px-6 py-3 justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <Link
          to="/products"
          className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg"
        >
          VIEW ALL
        </Link>
      </div>
      <hr />

      <Slider {...settings}>
        {/* getRandomProducts to get 12 random products --utils */}
        {getRandomProducts(home, 12)?.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Slider>
    </section>
  );
};

export default DealSlider;
