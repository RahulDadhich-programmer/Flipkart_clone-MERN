import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import Loader from "./components/Loader";
import DataProvider from "./context/DataProvider";
const Home = lazy(() => import("./components/Home/Home"));
const Product = lazy(() => import("./components/Products/Product"));
const NotFound = lazy(() => import("./components/NotFound"));
const Footer = lazy(() => import("./components/Layouts/Footer/Footer"));
const ProductDetailView = lazy(() =>
  import("./components/ProductDetail/ProductDetailView")
);
const Cart = lazy(() => import("./components/Cart/Cart"));
const Category = lazy(() => import("./components/Category/Category"));

function App() {
  return (
    <DataProvider>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/v1/allProducts/filterproducts/:productType"
            element={<Product />}
          />
          <Route
            path="/v1/productdetail/:product_id"
            element={<ProductDetailView />}
          />
          <Route path="/product/cart/:product_id" element={<Cart />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Suspense>
    </DataProvider>
  );
}

export default App;
