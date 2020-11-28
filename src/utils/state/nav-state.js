import React, {
  useState,
  createContext,
} from 'react';

export const NavContext = createContext();

export const NavProvider = (props) => {
  const [
    navShowState,
    setNavShowState,
  ] = useState(true);

  return (
    <NavContext.Provider
      value={[
        navShowState,
        setNavShowState,
      ]}
    >
      {props.children}
    </NavContext.Provider>
  );
};
