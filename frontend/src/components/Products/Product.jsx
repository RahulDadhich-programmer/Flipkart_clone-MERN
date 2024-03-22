import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterProducts, getProductsList } from "../../actions/Actions";

const Product = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const [price, setPrice] = useState([0, 76000]);
  const { Filter } = useSelector((state) => state.getFilterProduct);
  const [ratings, setRatings] = useState(0);
  const [ratingsToggle, setRatingsToggle] = useState(true);
  const { SimilarProducts, loading } = useSelector(
    (state) => state.getProductList
  );

  const priceMin = price[0];
  const priceMax = price[1];

  const clearFilters = () => {
    setPrice([0, 200000]);
    dispatch(getProductsList(productType));
    setRatings(0);
  };

  const handleRadioClick = (value) => {
    if (ratings !== value) {
      dispatch(filterProducts(value));
      setRatings(value);
    }
  };
  useEffect(() => {
    dispatch(getProductsList(productType));
  }, [dispatch, productType]);

  useEffect(() => {
    if (!loading && Filter?.length === 0) {
      dispatch(filterProducts(productType, priceMin, priceMax, ratings));
    }
  }, [dispatch, productType, priceMin, priceMax, loading, Filter, ratings]);
  const priceHandler = (event, newValue) => {
    setPrice(newValue);
  };
  return (
    <>
      <main className="main w-full sm:mt-0" style={{ marginTop: "2rem" }}>
        <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">
          <div
            className="hidden sm:flex flex-col w-1/5 px-1"
            style={{ marginTop: "2rem" }}
          >
            <div className="flex flex-col bg-white rounded-sm shadow">
              <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                <p className="text-lg font-medium">Filters</p>
                <span
                  className="uppercase text-primary-blue text-xs cursor-pointer font-medium"
                  onClick={() => clearFilters()}
                >
                  clear all
                </span>
              </div>

              <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                <div className="flex flex-col gap-2 border-b px-4">
                  <span className="font-medium text-xs">PRICE</span>

                  <Slider
                    value={price}
                    onChange={priceHandler}
                    onMouseUp={() =>
                      dispatch(filterProducts(productType, priceMin, priceMax))
                    }
                    valueLabelDisplay="auto"
                    getAriaLabel={() => "Price range slider"}
                    min={0}
                    max={200000}
                  />

                  <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      ₹{priceMin}
                    </span>
                    <span className="font-medium text-gray-400">to</span>
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      ₹{priceMax}
                    </span>
                  </div>
                </div>
              </div>
              {/* ratings */}
              <div className="flex flex-col border-b px-4">
                <div
                  className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                  onClick={() => setRatingsToggle(!ratingsToggle)}
                >
                  <p className="font-medium text-xs uppercase">ratings</p>
                  {ratingsToggle ? (
                    <ExpandLessIcon sx={{ fontSize: "20px" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                  )}
                </div>

                {ratingsToggle && (
                  <div className="flex flex-col pb-1">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="ratings-radio-buttons-group"
                        onChange={(e) => setRatings(e.target.value)}
                        value={ratings}
                        name="ratings-radio-buttons"
                      >
                        {[4, 3, 2, 1].map((el, i) => (
                          <FormControlLabel
                            value={el}
                            key={i}
                            control={<Radio size="small" />}
                            label={
                              <span className="flex items-center text-sm">
                                {el}
                                <StarIcon
                                  sx={{ fontSize: "12px", mr: 0.5 }}
                                />{" "}
                                & above
                              </span>
                            }
                            onClick={() => handleRadioClick(el)}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white"
            style={{ padding: "2rem" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
              {Array.isArray(Filter) &&
                Filter?.map((product) => (
                  <Link
                    to={`/v1/productdetail/${product.product_id}`}
                    className="items-center text-center group"
                  >
                    <div className="w-44 h-48">
                      <img
                        draggable="false"
                        className="w-full h-full object-contain"
                        src={product.imageURL}
                        alt=""
                      />
                    </div>
                    <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left">
                      {product.Name.length > 85
                        ? `${product.Name.substring(0, 85)}...`
                        : product.Name}
                    </h2>
                    <div className="flex flex-col gap-2 items-start">
                      <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                        <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
                          {product.ratings}{" "}
                          <StarIcon sx={{ fontSize: "14px" }} />
                        </span>
                        <span>({product.ratings})</span>
                      </span>

                      <div className="flex items-center gap-1.5 text-md font-medium">
                        <span>{product.price.toLocaleString()}</span>
                        <span className="text-gray-500 line-through text-xs">
                          {product.cuttedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-primary-green">
                          {product.discount}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
