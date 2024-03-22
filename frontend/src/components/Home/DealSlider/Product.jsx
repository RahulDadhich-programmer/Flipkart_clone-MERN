import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHomeAction, getProductsList } from "../../../actions/Actions";

const Product = ({ imageURL, Name, offer, tag, productType }) => {
  const dispatch = useDispatch();
  const { home, loading } = useSelector((state) => state.getHome);
  useEffect(() => {
    if (!loading && home?.length === 0) {
      dispatch(getHomeAction());
    }
  }, [dispatch, home, loading]);
  const handleClick = () => {
    dispatch(getProductsList(productType));
  };
  return (
    <Link
      to={`/v1/allProducts/filterproducts/${productType}`}
      className="flex flex-col items-center gap-1.5 p-6 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150 ease-out">
        <img
          draggable="false"
          className="w-full h-full object-contain"
          src={imageURL}
        />
      </div>
      <h2 className="font-medium text-sm mt-2">{Name}</h2>
      <span className="text-primary-green text-sm">{offer}</span>
      <span className="text-gray-500 text-sm">{tag}</span>
    </Link>
  );
};

export default Product;
