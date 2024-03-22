import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addCart, removeCart } from "../../actions/Actions";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalBalance from "./TotalBalance";

const Component = styled(Grid)(({ theme }) => ({
  padding: "100px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const Cart = () => {
  // get CartItems  from Redux store
  const { cartItems } = useSelector((state) => state.getCart);

  const { product_id } = useParams();

  const dispatch = useDispatch();
  const location = useLocation();

  // Retrieve productDetail from location state
  const productDetail = location.state?.productDetail || {};

  return (
    <>
      {productDetail &&
        Object.keys(productDetail).map((key) => {
          if (Array.isArray(productDetail[key])) {
            return productDetail[key].map((item) => (
              <Component container key={item.id}>
                <LeftComponent item lg={9}>
                  <Header>
                    <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                      My Cart ({productDetail.length}){" "}
                    </Typography>
                  </Header>
                  <CartItem item={item} />
                  <ButtonWrapper>
                    <StyledButton>Place Order</StyledButton>
                  </ButtonWrapper>
                </LeftComponent>
                <Grid item>
                  <TotalBalance cartItems={cartItems} />
                </Grid>
              </Component>
            ));
          }
          return null;
        })}
      {Object.keys(productDetail).length === 0 && <EmptyCart />}
    </>
  );
};

export default Cart;
