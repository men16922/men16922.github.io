import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ArticlesPage from "./containers/articles/ArticlesPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/kr/*" element={<Main />} />
          <Route path="/kr/articles" element={<ArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
