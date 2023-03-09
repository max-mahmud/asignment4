import { Route, Routes } from 'react-router-dom'
import RequirAuth from './Component/RequirAuth/RequirAuth'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Services from './Pages/Services/Services'
import Singin from './Pages/SingIn/SingIn'
import Footer from './Section/Footer/Footer'
import Header from './Section/Header/Header'
import NotPage from './Section/NotPage/NotPage'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/service' element={<Services />}/>
      <Route path='/blog' element={
        <RequirAuth>
          <Blog />
        </RequirAuth>
      }/>
      <Route path='/singin' element={<Singin/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NotPage/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
