import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectPage } from './types'

type ActionButtonProps = {

    children: React.ReactNode,
    setSelectPage: (value: SelectPage) => void

}

const ActionButton = ({ children, setSelectPage }: ActionButtonProps) => {

  return (

    <AnchorLink className='rounded-lg bg-pink-600 px-10 py-2 cursor-pointer hover:bg-amber-400'  onClick={ ()=> setSelectPage(SelectPage.Contact) } href={`#${SelectPage.Contact}`} >
        {children}
    </AnchorLink>

  )
}

export default ActionButton