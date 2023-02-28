import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import AboutPage from './pages/about/AboutPage'
import ProjectPage from './pages/projectPage/ProjectPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timeline' element={<AboutPage />} />
        <Route path='/project-page/:projectId' element={<ProjectPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>

  );
}

export default App;
