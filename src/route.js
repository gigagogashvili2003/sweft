import Profile from "components/ui/profile/Profile";
import Main from "./components/ui/main/Main";

// Dynamical routes/

const routes = [
  {
    path: "/",
    element: <Main />,
    uniqueKey: "route_1",
  },
  {
    path: "/users/user/:userId",
    element: <Profile />,
    uniqueKey: "route_2",
  },
];

export default routes;
