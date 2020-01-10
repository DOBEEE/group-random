import App from "./App";
import Home from "../page/home";
import PageOne from "../page/pageone";
import NotFound from "../page/notfound";
export default () => {
    return [
        {
            component: App,
            routes: [
                {
                    path: "/",
                    exact: true,
                    component: Home
                },
                {
                    path: "/one",
                    component: PageOne
                },
                {
                    path: "*",
                    component: NotFound
                }
            ]
        }
    ];
};
