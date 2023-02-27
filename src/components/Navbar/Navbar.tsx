import React, { useState } from 'react'
import {Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'
import { SelectPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type NavbarProps = {

    selectPage: SelectPage,
    setSelectPage: (value: SelectPage)=> void,

}

const Navbar = ({selectPage, setSelectPage}: NavbarProps) => {

  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (

    <nav>

        <div className={`${flexBetween} fixed top-0 z-100 w-full py-4 border-b-2 border-purple-400`}>

            <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-14`}>

                    <img src={Logo} alt="logo" style={{ width: '4rem', borderRadius: '50%', }} />

                    { isAboveMediumScreen ? (<div className={`${flexBetween} w-full`}>

                        <div className={`${flexBetween} gap-10 text-sm`}>
                            <Link page='Home' selectPage={selectPage} setSelectPage = {setSelectPage} />
                            <Link page='Benefits' selectPage={selectPage} setSelectPage = {setSelectPage} />
                            <Link page='Our Menu' selectPage={selectPage} setSelectPage = {setSelectPage} />
                            <Link page='Contact' selectPage={selectPage} setSelectPage = {setSelectPage} />
                        </div>

                        <div className={`${flexBetween} gap-6`}>
                            <p>Sign In</p>
                            <ActionButton setSelectPage = {setSelectPage} >Get Started</ActionButton>
                        </div>

                    </div>) : (<button className='rounded-full p-2 bg-amber-500'  onClick={ ()=> setMenuToggle(!menuToggle) } > <Bars4Icon className='h-7 w-7 text-white' /> </button>) }

                </div>

            </div>

        </div>


        {/* Mobile menu */}


        { !isAboveMediumScreen && menuToggle && ( 

            <div className='fixed right-0 bottom-0 z-200 h-full w-[300px] drop-shadow-xl bg-zinc-900'>

                <div className='flex justify-end p-10'>
                    <button onClick={ ()=> setMenuToggle(!menuToggle) } >
                        <XMarkIcon className='h-7 w-7 text-white' />
                    </button>
                </div>


                {/* Menu */}

                <div className=' ml-[33%] flex flex-col gap-10 text-2xl'>
                    <Link page='Home' selectPage={selectPage} setSelectPage = {setSelectPage} />
                    <Link page='Benefits' selectPage={selectPage} setSelectPage = {setSelectPage} />
                    <Link page='Our Menu' selectPage={selectPage} setSelectPage = {setSelectPage} />
                    <Link page='Contact' selectPage={selectPage} setSelectPage = {setSelectPage} />
                </div>


            </div>

         ) }


        



    </nav>

  )
}

export default Navbar