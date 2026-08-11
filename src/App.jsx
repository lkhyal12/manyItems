import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="/order/:id" element={<OrderDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
