import React from 'react'
import Main from './components/main'
import Design_1 from './components/1_Design/index'
import Design_2 from './components/2_Design/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/1_design' element={<Design_1/>}/>
            <Route path='/2_design' element={<Design_2/>}/>
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App