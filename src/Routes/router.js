import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Account from "../Pages/Account/Account";
import AddItem from "../Pages/AddItem/AddItem";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageInventory from "../Pages/ManageInventory/ManageInventory";

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
            },
            {
                path: '/manage/inventory',
                element: <ManageInventory></ManageInventory>,
                loader: async () => fetch('http://localhost:5000/perfumes')
            }
        ]
    }
]);

export default router;