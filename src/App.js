import Home from "./routes/home/home.component";
import Authentication from "./components/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Navigation/>}>
      {/* index=true we use so when the above directory match it automatically loads the below component too */}
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
