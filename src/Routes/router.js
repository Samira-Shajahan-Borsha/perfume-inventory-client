import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Account from "../Pages/Account/Account";
import AddItem from "../Pages/AddItem/AddItem";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/account',
                element: <Account></Account>
            },
            {
                path: '/add/item',
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            }
        ]
    }
]);

export default router;