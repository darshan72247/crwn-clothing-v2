import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return(
    <h1> Welcome to Shop Page</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element= {<Navigation/>}>
      {/* index=true we use so when the above directory match it automatically loads the below component too */}
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
