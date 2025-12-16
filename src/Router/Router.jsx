import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true, 
                Component: HomeLayout
            }
        ]
    }
])
