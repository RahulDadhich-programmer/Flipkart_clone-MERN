import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getHomeAction } from "../../../actions/Actions";
import "./Banner.css";
export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      Previous
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {" "}
      Next
    </div>
  );
};

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const dispatch = useDispatch();
  const { home, loading } = useSelector((state) => state.getHome);

  useEffect(() => {
    if (!loading && home?.length === 0) {
      dispatch(getHomeAction());
    }
  }, [dispatch, home, loading]);

  return (
    <>
      <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {/* home - store (Banners) */}
          {home?.Banners.map((data, index) => (
            <img
              draggable="false"
              className="h-44 sm:h-72 w-full object-cover"
              src={data.imageURL}
              alt="banner"
              key={index}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
