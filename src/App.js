import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Products from "./Components/Products";
import PageNotFound from "./Components/PageNotFound";
import ProductDetail from "./Components/ProductDetail";
import { useState, useEffect } from "react";
import BagContainer from "./Components/BagContainer";
import WishListContainer from "./Components/WishListContainer";
import Login from "./Components/Login";

const ProductsWrapper = ({ productsData }) => {
  const { brandName, gender } = useParams();

  let filteredProducts = productsData;

  if (brandName) {
    filteredProducts = filteredProducts.filter(
      (item) => item.brandName?.toLowerCase() === brandName.toLowerCase()
    );
  }

  if (gender) {
    filteredProducts = filteredProducts.filter(
      (item) => item.gender?.toLowerCase() === gender.toLowerCase()
    );
  }

  return (
    <Products
      products={filteredProducts}
      title={`Products${brandName ? ` by ${brandName}` : ""}${gender ? ` for ${gender}` : ""}`}
    />
  );
};




const ProductDetailWrapper = ({ productsData }) => {
  const { id } = useParams();
  const product = productsData.find((p) => String(p.id) === id);

  if (!product) return <div style={{ padding: "2rem" }}>Product not found</div>;

  return <ProductDetail product={product} />;
};

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"; // Assuming your login page route is '/login'

  return (
    <div>
      {children}
      {!isLoginPage && <Footer />}{" "}
      {/* Render Footer only if not on the login page */}
    </div>
  );
}

function App() {
  const [productsData, setProductsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    console.log(searchQuery)
  };

  useEffect(() => {
    fetch("http://localhost:3007/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.log("Product fetch error:", err));
  }, []);

  return (
    <div>
      <NavBar onSearchChange={handleSearchChange} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
<Route path="/products/:gender?"  element={<ProductsWrapper productsData={productsData} />} />
<Route path="/products/:brandName?"  element={<ProductsWrapper productsData={productsData} />} />

          <Route
            path="/product-detail/:id"
            element={<ProductDetailWrapper productsData={productsData} />}
          />
          <Route path="/bagContainer" element={<BagContainer />} />
          <Route path="/wishlist" element={<WishListContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
