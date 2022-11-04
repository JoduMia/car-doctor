import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/main/Main";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Order from "../pages/Orders/Order";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Main />}>
        <Route index element={ <Home /> } />
        <Route path="register" element={ <Register />} />
        <Route path="login" element={ <Login />} />
        <Route path="orders" element={ <PrivateRoutes><Order /></PrivateRoutes>} />
        <Route path="services/:id" element={ <PrivateRoutes><Checkout /></PrivateRoutes> } loader={({params}) => fetch(`https://car-doctor-server.vercel.app/services/${params.id}`)}/>
    </Route>
))