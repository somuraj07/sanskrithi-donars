import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

import { Donar } from './pages/Donar'
import { Donars } from './pages/Donars'


function App() {
 
 

  return (
<>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/donar/:id" element={<Donar />} />
          <Route path="/donars" element={<Donars />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;