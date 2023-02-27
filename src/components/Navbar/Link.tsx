import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type LinkProps = {

  page: string,
  selectPage: string,
  setSelectPage: (value: string)=> void,

}

const Link = ({ page, selectPage, setSelectPage }: LinkProps) => {


    const pageLowerCase = page.toLowerCase().replace(/ /g, '');


  return (

      <AnchorLink className={`${selectPage === pageLowerCase  ? 'text-fuchsia-500' : ''}  transition duration-500 hover: text-fuchsia-300 `} href={`#${pageLowerCase}`} onClick={ ()=> setSelectPage(pageLowerCase) } >
          {page}
      </AnchorLink>
    
  )
}

export default Link