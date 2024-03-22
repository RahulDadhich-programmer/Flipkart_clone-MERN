import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCart, getProductDetail } from "../../actions/Actions";
import "./product.css";

const ActionItem = ({ productDetail }) => {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productDetail.product_id || product_id !== productDetail.product_id)
      dispatch(getProductDetail(product_id, productDetail));
  }, [dispatch, product_id]);

  const addItemToCart = () => {
    const cartData = Object.entries(productDetail).flatMap(
      ([key, value]) => value
    );
    const [{ Name, quantity, price, discount, cuttedPrice, product_id }] =
      cartData;

    dispatch(addCart(quantity, Name, price, discount, cuttedPrice, product_id));

    navigate(`/product/cart/${product_id}`);
  };

  return (
    <div className="left-container">
      {productDetail &&
        Object.keys(productDetail).map(
          (key) =>
            Array.isArray(productDetail[key]) &&
            productDetail[key].map((item, index) => (
              <div className="main" key={index}>
                <img className="image" src={item.detailUrl} alt="" />
                <button
                  className="styled-button_1"
                  onClick={() => addItemToCart()}
                >
                  Add to Cart
                </button>
                <button className="styled-button_2">Buy Now</button>
              </div>
            ))
        )}
    </div>
  );
};

export default ActionItem;
