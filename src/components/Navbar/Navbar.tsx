import React from 'react'
import {Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'

type Props = {}

const Navbar = (props: Props) => {

  const flexBetween = 'flex items-center justify-between'

  return (

    <nav>

        <div className={`${flexBetween} fixed top-0 z-100 w-full py-4 border-b-2 border-purple-400`}>

            <div className={`${flexBetween} mx-auto w-5/6`}>

                <div className={`${flexBetween} w-full gap-14`}>

                    <img src={Logo} alt="logo" style={{ width: '4rem', borderRadius: '50%', }} />

                    <div className={`${flexBetween} w-full`}>

                        <div className={`${flexBetween} gap-10 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Menu</p>
                            <p>Contact</p>
                        </div>

                        <div className={`${flexBetween} gap-6`}>
                            <p>Sign In</p>
                            <button>Get Started</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </nav>

  )
}

export default Navbar