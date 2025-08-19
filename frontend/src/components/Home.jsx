import React from 'react'
import Login from './components/Login'
import Login from './components/Signup'
function Home() {
  return (
   <BrowserRouter>
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/login" element={<Signup />} />
  {/* <Route path="/home" element={<Home />} /> */}
  </Routes>
  </BrowserRouter>

  )
}

export default Home