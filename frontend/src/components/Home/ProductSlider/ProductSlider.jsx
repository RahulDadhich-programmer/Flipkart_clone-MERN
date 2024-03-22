import { Link } from "react-router-dom";

const ProductSlider = ({ title, tagline }) => {
  return (
    <section className="bg-white w-full shadow overflow-hidden">
      <div className="flex px-6 py-4 justify-between items-center">
        <div className="title flex flex-col gap-0.5">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>
        <Link
          to="/products"
          className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg uppercase"
        >
          view all
        </Link>
      </div>
      <hr />
    </section>
  );
};

export default ProductSlider;
