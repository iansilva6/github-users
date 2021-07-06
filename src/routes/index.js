import Home from "../pages/Home";
import User from "../pages/User";

const routes = [
    { path: "/:id", name: "User", component: User },
    { path: "/", name: "Home", component: Home },
]

export default routes;