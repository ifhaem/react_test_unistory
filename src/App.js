import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./pages/Blog";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Blog />} />
          <Route path=":postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
