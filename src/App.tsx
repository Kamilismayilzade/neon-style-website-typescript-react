import { useState } from 'react'
import './App.css'
import Navbar from '@/components/Navbar/Navbar'
import { SelectPage } from '@/shared/types';



function App() {

  const [selectPage, setSelectPage] = useState<SelectPage>(SelectPage.Home);

  return (

    <div className='app bg-zinc-900 text-slate-50'>
      
      <Navbar selectPage={selectPage} setSelectPage = {setSelectPage} />

    </div>

  )
}

export default App
