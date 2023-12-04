import './style/App.scss'
import routes from './components/routes';
import { Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <div className='app-wrapper'>
      <h1>Metal check</h1>
      <NavBar />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </div>
  )
}

export default App
