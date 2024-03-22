import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { DataContext } from "../../../context/DataProvider";
import LoginDialog from "../../User/LoginDialog";
import Profile from "../../User/Profile";
import "./Header.css";
import Searchbar from "./Searchbar";
import SecondaryDropDownMenu from "./SecondaryDropDownMenu";

const Header = () => {
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext) || {};
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
      <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="flex items-center flex-1">
          <Link className="h-7 mr-1 sm:mr-4" to="/">
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={logo}
              alt="Flipkart Logo"
            />
          </Link>

          <Searchbar />
        </div>

        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          {account ? (
            <Profile account={account} setAccount={setAccount} />
          ) : (
            <div
              className="LoginButton"
              variant="contained"
              onClick={() => openDialog()}
            >
              Login
            </div>
          )}

          <span
            className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer"
            onClick={() => setToggleSecondaryDropDown(!toggleSecondaryDropDown)}
          >
            More
            <span>
              {toggleSecondaryDropDown ? (
                <ExpandLessIcon sx={{ fontSize: "16px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              )}
            </span>
          </span>
          {toggleSecondaryDropDown && <SecondaryDropDownMenu />}
          <Link
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative"
          >
            <span>
              <ShoppingCartIcon />
            </span>
            Cart
          </Link>
        </div>
        <LoginDialog open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
