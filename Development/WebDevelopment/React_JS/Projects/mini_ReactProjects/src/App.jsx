import  { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'

const components = [
  { path: "/accordion", component: lazy(() => import('./Components/Accordion/Accordion')) },
  { path: "/rcg", component: lazy(() => import('./Components/RandomColorGenerate')) },
  { path: "/star", component: lazy(() => import('./Components/StarSelect')) },
  { path: "/slider", component: lazy(() => import('./Components/ImageSlider')) },
  { path: "/loadmore", component: lazy(() => import('./Components/LoadMore')) },
  { path: "/menu", component: lazy(() => import('./Components/RecursiveMenu')) },
  { path: "/switchthemes", component: lazy(() => import('./Components/SwitchTheme')) },
  { path: "/scrollindicator", component: lazy(() => import('./Components/ScrollIndicator/Scroll-Indicator')) },
  { path:"/githubProfileFinder", component: lazy(() => import('./Components/Git-Hub_ProfileFinder/ProfileFinder')) },
  {path:"/tic-tac-toe", component: lazy(() => import('./Components/Tic-Tac-Toe'))}
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
       
        <Routes>
          <Route path="/" element={ <ProjectList />} />
          {components.map((component, index) => ( 
            <Route key={index} path={component.path} element={<Suspense fallback={<div>Loading...</div>}><component.component /></Suspense>} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Home() {
  const navigate = useNavigate();

  return (
    <button style={{
      position: 'absolute',
      top: '0rem',
      left: '0rem'
    }} onClick={() => navigate("/")}>Home</button>
  )
}

function ProjectList() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul style={{ cursor: 'pointer' }}>
        {components.map((component, index) => (
          <li key={index} onClick={() => navigate(component.path)}>{component.path}</li>
        ))}
      </ul>
    </nav>
  )
}

export default App;

