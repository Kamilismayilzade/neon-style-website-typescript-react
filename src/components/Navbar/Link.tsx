import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type LinkProps = {

  page: string,

}

const Link = ({ page }: LinkProps) => {

  return (

      <AnchorLink>
          {page}
      </AnchorLink>
    
  )
}

export default Link