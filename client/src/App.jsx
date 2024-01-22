import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/dashbord' element={<Dashboard/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
