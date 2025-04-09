import './App.css'
import UseEffect1 from './pages/useEffect1'
import Home from './pages/Route/Home'
import About from './pages/Route/About'
import NotFound from './pages/Route/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/useEffect1' element={<UseEffect1 />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
