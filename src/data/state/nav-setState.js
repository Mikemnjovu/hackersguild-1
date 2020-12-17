import React, {
  useContext,
} from 'react';
import { NavContext } from './nav-state';
export const NavSetState = (state) => {
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);
  setNavShowState(state);
};
