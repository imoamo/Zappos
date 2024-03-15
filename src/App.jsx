import { Routes, Route } from 'react-router-dom';
import Cart from "../src/components/Cart/Cart";
import AllApps from './AllApps';

function App() {
  return (
    <>

      {<Routes>
        <Route path='/' element={<AllApps />} />
        <Route path='/Cart' element={
          <Cart />
        } />
      </Routes>}
    </>
  )
}

export default App;
