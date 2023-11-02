import { Routes, Route , useLocation} from 'react-router-dom'
import './App.css'
import Landing from './views/landing/landing'
import Home from './views/home/home'
// import Detail from './views/detail/Detail'
 import Nav from './components/nav/Nav'
// import Form from './views/form/Form'
function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <Nav/>}
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form/>}/>  */}
      </Routes>
    </div>
  )
}

export default App