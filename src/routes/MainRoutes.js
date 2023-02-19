import Actions from "../views/Actions";
import Association from "../views/Association";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Join from "../views/Join";
import Team from "../views/Team";
import Missing from "../views/Missing";
const MainRoutes = {
    path: "",
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "actions",
            element: <Actions/>
        },
        {
            path: "contact",
            element: <Contact/>
        },
        {
            path: "association",
            element: <Association/>
        },
        {
            path: "join",
            element: <Join/>
        },
        {
            path: "team",
            element: <Team/>
        },
        {
            path: "*",
            element: <Missing/>
        }
    ]
}

export default MainRoutes;