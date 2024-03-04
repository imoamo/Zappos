import { Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Signup from "../src/components/Signup/Signup";
import Cart from "../src/components/Cart/Cart";
import PrivateComponent from "../src/components/PrivateComponent";
import AllApps from './AllApps';

function App() {
  return (
    <>
      {<Routes>
        <Route path='/' element={<AllApps />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={
          <PrivateComponent>
            <Cart />
          </PrivateComponent>
        } />
      </Routes>}
    </>
  )
}

export default App;
