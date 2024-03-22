import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFooter, getHomeAction } from "../../actions/Actions";
import Categories from "../Layouts/Categories";
import Footer from "../Layouts/Footer/Footer";
import Banner from "./Banner/Banner";
import DealSlider from "./DealSlider/DealSlider";
import ProductSlider from "./ProductSlider/ProductSlider";

const Home = () => {
  const dispatch = useDispatch();
  const { footer } = useSelector((state) => state.getFooter);
  const { home } = useSelector((state) => state.getHome);

  useEffect(() => {
    dispatch(getHomeAction());
    dispatch(getFooter());
  }, [dispatch]);

  return (
    <>
      <Categories home={home} />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner home={home} />

        <ProductSlider
          title={"Suggested for You"}
          tagline={"Based on Your Activity"}
        />

        <DealSlider title={"Discounts for You"} />

        <ProductSlider
          title={"You May Also Like..."}
          tagline={"Based on Your Interest"}
        />

        <DealSlider title={"Top Offers On"} />

        <ProductSlider
          title={"Don't Miss These!"}
          tagline={"Inspired by your order"}
        />
        <Footer footer={footer} />
      </main>
    </>
  );
};

export default Home;
