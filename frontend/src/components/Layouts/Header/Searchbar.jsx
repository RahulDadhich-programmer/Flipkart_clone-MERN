import SearchIcon from "@mui/icons-material/Search";
import { List, ListItem, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getHomeAction } from "../../../actions/Actions";
const ListWrapper = styled(List)`
  position: absolute;
  background: #fff;
  color: #000;
  margin-top: 15rem;
`;
const Searchbar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const { home } = useSelector((state) => state.getHome);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeAction());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  return (
    <form className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
      <input
        value={text}
        onChange={(e) => getText(e.target.value)}
        className="text-sm flex-1 outline-none border-none placeholder-gray-500"
        type="text"
        placeholder="Search for products, brands and more"
      />
      {text && (
        <ListWrapper>
          {home.products
            .filter((product) =>
              product.Name.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`v1/allProducts/filterproducts/${product.productType}`}
                  onClick={() => setText("")}
                >
                  {product.Name}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
      <button type="submit" className="text-primary-blue">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Searchbar;
