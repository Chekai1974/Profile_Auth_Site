import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { NewsPage } from "./Pages/NewsPage";
import { CatalogPage } from "./Pages/CatalogPage";
import { HomePage } from "./HomePage/HomePage";
import { Activities } from "./Pages/Activities";
import { Calendar } from "./Pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
