import { Roles } from "./roles";
import * as views from "../pages";

type RoleTypes = Roles.ADMIN | Roles.DEALER;
type componentType = keyof typeof views;

interface AppRouteObj {
  roles: RoleTypes[];
  view: componentType;
  path: string;
  isPrivate: boolean;
  exact: boolean;
  isAuth?: boolean
}

const AppRoutes: Array<AppRouteObj> = [
  {
    roles: [],
    view: "Home",
    path: "/home",
    isPrivate: false,
    exact: true,
  },
  {
    roles: [Roles.ADMIN],
    view: "AdminPage",
    path: "/admin/dashboard",
    isPrivate: true,
    exact: true,
  },
  {
    roles: [Roles.DEALER],
    view: "DealerDashboard",
    path: "/dealer/dashboard",
    isPrivate: true,
    exact: true,
  },
  {
    roles: [],
    view: "Login",
    path: "/login",
    isPrivate: false,
    isAuth: true,
    exact: true,
  },
  {
    roles: [],
    view: "CatalogPage",
    exact: true,
    isPrivate: false,
    isAuth: false,
    path: "/catalog"
  }
];

export default AppRoutes;