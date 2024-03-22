import { LocalOffer as Badge } from "@mui/icons-material";
import React from "react";
import "./product.css";
const Detailview = ({ item }) => {
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <h2>Available offers</h2>
      <div className="small-text">
        <div className="offer">
          <Badge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </div>
        <div className="offer">
          <Badge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </div>
        <div className="offer">
          <Badge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </div>
        <div className="offer">
          <Badge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </div>
      </div>
      <table className="detail-table">
        <tbody>
          <tr>
            <td className="label">Delivery</td>
            <td className="value">Delivery by {date.toDateString()} | ₹40</td>
          </tr>
          <tr>
            <td className="label">Warranty</td>
            <td className="value">No Warranty</td>
          </tr>
          <tr>
            <td className="label">Seller</td>
            <td className="value">
              <span className="seller">SuperComNet</span>
              <p>GST invoice available</p>
              <p>View more sellers starting from ₹329</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <img src={adURL} alt="advertisement" className="ad-image" />
            </td>
          </tr>
          <tr>
            <td className="label">Description</td>
            <td className="value">{item.description}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detailview;
