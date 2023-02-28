import { useEffect, useState } from 'react'
import './App.css'
import Navbar from '@/components/Navbar/Navbar'
import { SelectPage } from '@/shared/types';
import Home from '@/components/Home/Home';



function App() {

  const [selectPage, setSelectPage] = useState<SelectPage>(SelectPage.Home);
  const [topPage, setTopPage] = useState<boolean>(true);

  useEffect( ()=> {

    const handleScroll = function() {

      if (window.scrollY === 0) {
        setTopPage(true);
        setSelectPage(SelectPage.Home);
      }

      if (window.scrollY !== 0) setTopPage(false);

    }

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);

  }, [])

  return (

    <div className='app bg-zinc-900 text-slate-50'>
      
      <Navbar topPage = {topPage} selectPage={selectPage} setSelectPage = {setSelectPage} />
      <Home setSelectPage = {setSelectPage} />

    </div>

  )
}

export default App
