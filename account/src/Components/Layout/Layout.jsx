import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Aside } from "../Aside/Aside";
import { Footer } from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Aside></Aside>
        <div className="container-content">
          <Outlet />
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}

export { Layout };
