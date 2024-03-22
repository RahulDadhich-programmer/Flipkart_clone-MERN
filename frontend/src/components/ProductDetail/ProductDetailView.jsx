import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../actions/Actions";
import ActionItem from "./ActionItem";
import Detailview from "./Detailview";
import "./product.css";

const ProductDetailView = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { product_id } = useParams();

  const { loading, productDetail } = useSelector(
    (state) => state.getProductDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productDetail.product_id || product_id !== productDetail.product_id)
      dispatch(getProductDetail(product_id));
  }, [dispatch, product_id]);

  return (
    <div className="component">
      {" "}
      {/* Apply external CSS class */}
      <div className="container">
        <div className="left-container">
          <ActionItem productDetail={productDetail} />
        </div>

        <div className="right-container">
          {productDetail &&
            Object.keys(productDetail).map(
              (key) =>
                Array.isArray(productDetail[key]) &&
                productDetail[key].map((item, index) => (
                  <div key={index}>
                    <h3>{item.title}</h3>
                    <p className="rating">8 Ratings & 1 Reviews</p>
                    <img src={fassured} className="fassured" alt="Fassured" />
                    <p className="price">
                      ₹{item.price} &nbsp;
                      <span className="discount">
                        <strike>{item.price}</strike>
                      </span>{" "}
                      &nbsp;
                      <span className="discount">{item.discount}</span>
                    </p>
                    <Detailview item={item} />
                  </div>
                ))
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
