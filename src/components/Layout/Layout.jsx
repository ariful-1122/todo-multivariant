import React from "react";
import MainNavigation from "../Navigation/MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
