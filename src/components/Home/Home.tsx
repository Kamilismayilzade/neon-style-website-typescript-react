import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectPage } from '@/shared/types'
import React from 'react'
import HomePageText from '@/assets/homepagetext.png'
import HomePageMain from '@/assets/homepagemain.png'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type HomeProps = {

    setSelectPage: (value: SelectPage) => void,

}

const Home = ({ setSelectPage }: HomeProps) => {

    const isAboveMediumScreen = useMediaQuery(' (min-width: 1060px) ');

  return (

    <section id='home' className='gap-16 py-10 md:h-full md:pb-0'>

        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>

            {/* Header */}
            <div className='z-10 mt-32 md:basis-3/5'>

                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20'>
                            <img src={HomePageText} alt="home-page-text" className='w-40 h-20' />
                        </div>  
                    </div>
                    <p className='mt-8 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio non eum, at quae eaque voluptas nobis ipsum nisi,
                     magni voluptates error totam beatae perferendis, recusandae illo qui omnis incidunt maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet quibusdam, aperiam provident nihil vel quam unde aut autem dolores incidunt.</p>
                </div>

                <div>
                    <ActionButton setSelectPage = {setSelectPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className='text-sm font-semibold' onClick={ ()=> setSelectPage(SelectPage.Contact) } href={`#${SelectPage.Contact}`} >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>

            </div>


            {/* Image */}
            <div>
                <img src={HomePageMain} alt="home-page-main" className='w-full h-84 rounded-3xl' />
            </div>

        </div>

    </section>

  )
}

export default Home