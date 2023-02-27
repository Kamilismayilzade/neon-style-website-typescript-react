import { useState } from 'react'
import './App.css'
import Navbar from '@/components/Navbar/Navbar'

function App() {

  const [selectPage, setSelectPage] = useState<string>('home');

  return (

    <div className='app bg-zinc-900 text-slate-50'>
      
      <Navbar selectPage={selectPage} setSelectPage = {setSelectPage} />

    </div>

  )
}

export default App
