import './App.css'
import { Nav } from './components/Nav/Nav';
import routes from './components/routes';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <div className='app-wrapper'>
      <h1>App wrapper</h1>
      <Nav />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </div>
  )
}

export default App
