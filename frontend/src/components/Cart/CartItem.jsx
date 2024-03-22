import { Box, Button, Card, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipses } from "../../utils/functions";
import GroupedButton from "./GroupedButton";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
const CartItem = ({ item, removeItemFromCart }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <>
      <Component>
        <LeftComponent>
          <img src={item.imageURL} alt="product" />

          <GroupedButton />
        </LeftComponent>
        <Box style={{ margin: 20 }}>
          {/* addEllipses --> used for ..., large title from utils*/}
          <Typography>{item.Name}</Typography>
          <SmallText>
            Seller:RetailNet
            <span>
              <img src={fassured} style={{ width: 50, marginLeft: 10 }} />
            </span>
          </SmallText>
          <Typography style={{ margin: "20px 0" }}>
            <Cost component="span">₹{item.price}</Cost>&nbsp;&nbsp;&nbsp;
            <MRP component="span">
              <strike>₹{item.price}</strike>
            </MRP>
            &nbsp;&nbsp;&nbsp;
            <Discount component="span">{item.discount} </Discount>
          </Typography>
          <Remove onClick={() => removeItemFromCart(item.product_id)}>
            Remove
          </Remove>
        </Box>
      </Component>
    </>
  );
};

export default CartItem;
