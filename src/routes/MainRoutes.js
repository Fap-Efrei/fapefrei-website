import Actions from "../views/Actions";
import Association from "../views/Association";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Join from "../views/Join";
import Team from "../views/Team";
import Missing from "../views/Missing";
import Old from "../views/Old";
import Planning from "../views/Planning";

const MainRoutes = {
    path: "",
    children: [
        {
            path: "/",
            element: <Home/>,
            name: "Home",
        },
        {
            path: "actions",
            element: <Actions/>,
            name: "Actions",
        },
        {
            path: "contact",
            element: <Contact/>,
            name: "Contact",
        },
        {
            path: "association",
            element: <Association/>,
            name: "Association",
        },
        {
            path: "join",
            element: <Join/>,
            name: "Join",
        },
        {
            path: "team",
            element: <Team/>,
            name: "Team",
        },
        {
            path: "old",
            element: <Old/>,
            name: "Old",
        },
        {
            path: "planning",
            element: <Planning/>,
            name: "Planning",
        },
        {
            path: "*",
            element: <Missing/>
        }
    ]
}

export default MainRoutes;