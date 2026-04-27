import { Route, Routes } from 'react-router-dom';
import Index from './Project/Index';
import Footer from './Project/Footer';
import Test from './Project/Sidebar';
import Add_to_Cart from './Project/Add_to_Cart';
import Hanging from './Project/Product/Hanging';
import Wall from './Project/Product/Wall';
import Ceiling from './Project/Product/Ceiling';
import NavBar from './Project/Navbar';
import Chandelier from './Project/Product/Chandelier';
import Floor from './Project/Product/Floor';
import Table_lamp from './Project/Product/Table_lamp';
import Outdoor_lights from './Project/Product/Outdoor_lights';
import Mirror_lights from './Project/Product/Mirror_lights';
import Login from './Project/Login';
import Ragister from './Project/Ragister';
import Admin from './Project/Admin Penal/Admin';
import Edit_Api from './Project/Admin Penal/Edit_api';


function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route path='navbar' element={<NavBar />} />
          <Route path='footer' element={<Footer />} />
        </Route>

        <Route path='/hanging' element={<Hanging />} />
        <Route path='/wall' element={<Wall />} />
        <Route path='/ceiling' element={<Ceiling/>} />
        <Route path='/chandelier' element={<Chandelier/>} />
        <Route path='/floor' element={<Floor/>} />
        <Route path='/tablelamp' element={<Table_lamp/>} />
        <Route path='/outdoorlights' element={<Outdoor_lights/>} />
        <Route path='/mirrorlights' element={<Mirror_lights/>} />


        <Route path='test' element={<Test />} />
        <Route path='/addcart' element={<Add_to_Cart />} />
        <Route path='login' element={<Login/>} />
        <Route path='ragister' element={<Ragister/>} />


        <Route path='/admin' element={<Admin/>} />
        <Route path='/editApi/:id' element={<Edit_Api/>} />
      </Routes>
    </>
  )
}

export default Router
