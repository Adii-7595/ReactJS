import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Support from './components/support'
import NotFound from './components/NotFound'
import Labs from './components/labs'
import Home from './components/home'
import About from './components/About'
import MainHeader from './components/MainHeader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>


      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/support'>Support</NavLink></li>
          <li><NavLink to='/labs'>Labs</NavLink></li>

        </ul>
      </nav>

      <Routes>

        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route index element={<Home></Home>}/>
          <Route path="/support" element={<Support></Support>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/labs" element={<Labs></Labs>} />
          <Route path="/*" element={<NotFound></NotFound>} />

        </Route>

      </Routes>

    </div>

  )
}

export default App
