import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/main/Main";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Order from "../pages/Orders/Order";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Main />}>
        <Route index element={ <Home /> } />
        <Route path="login" element={ <Login />} />
        <Route path="register" element={ <Register />} />
        <Route path="orders" element={ <Order />} />
        <Route path="services/:id" element={ <Checkout /> } loader={({params}) => fetch(`http://localhost:5000/services/${params.id}`)}/>
    </Route>
))