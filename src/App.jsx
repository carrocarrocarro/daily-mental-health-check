import './style/App.scss'
import routes from './components/routes';
import { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Loader } from './components/Loader/Loader';

function App() {
  const [loadingPage, setLoadingPage] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoadingPage(false), 2500)
  }, [])
  
  return (
    <>
    {loadingPage && <Loader />}
    {
      <div className='app-wrapper'>
        <NavBar />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </div>
    }
    </>
  )
}

export default App
