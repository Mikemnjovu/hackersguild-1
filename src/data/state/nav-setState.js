import { useContext } from "react";
import { NavContext } from "./nav-state";
export const NavSetState = (state) => {
  const [, setNavShowState] = useContext(NavContext);
  setNavShowState(state);
};
