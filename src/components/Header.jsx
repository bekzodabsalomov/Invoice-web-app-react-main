import React, { useState } from 'react'
import logo from '../assets/logo.png'
import useDarkMode from '../hooks/useDarkMode'
import { motion } from 'framer-motion'
import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'
import profile from '../assets/image-avatar.jpg'

function Header() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toogleFDarkMode = () => {
    setTheme(colorTheme)
    setDarkSide((state) => !state)
  }

  const transition = {
    type: 'spring',
    stiffness: 200,
    damping: 10
  }
  return (
    <div>
      <header className='lg:hidden h-[80px] z-50 duration-300 ease-in-out p-4 dark:bg-[#1e2139] bg-[#373b53] flex items-center justify-end'>
        <img src={logo} className='h-[80px] absolute top-0 left-0' alt="logo" />
        <div className='flex items-centerx'>
          {
            colorTheme === 'light' ? <motion.img
              initial={{
                scale: 0.6, rotate: 90
              }}
              animate={{
                scale: 1,
                rotate: 360,
                transition
              }}
              whileTap={{
                scale: 0.9,
                rotate: 15,

              }}
              onClick={toogleFDarkMode}
              src={moon}
              className='cursor-pointer' />
              :
              <motion.img
                initial={{
                  rotate: 45
                }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  transition
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 15,

                }}
                onClick={toogleFDarkMode}
                src={sun}
                className='cursor-pointer' />
          }
          <div className='h-[h-80px] border-dotted border-l border-[#494e6e] mx-6'></div>

          <div className='relative'>
            <img src={profile} alt="profile-img" className='rounded-full h-[25px]' />
          </div>
        </div>
      </header>

      {/*sidebar */}
      <div className='z-50  hidden lg:block'>
        <div className='fixed z-50 w-[100px] rounded-r-3xl flex-col top-0 left-0 h-screen dark:bg-[#1e2139] bg-[#373b53]'>
          <div className='h-full w-full flex flex-col justify-between items-center'>
          <img src={logo} className='relative'/>

          <div>
          {
            colorTheme === 'light' ? <motion.img
              initial={{
                scale: 0.6, rotate: 90
              }}
              animate={{
                scale: 1,
                rotate: 360,
                transition
              }}
              whileTap={{
                scale: 0.9,
                rotate: 15,

              }}
              onClick={toogleFDarkMode}
              src={moon}
              className='cursor-pointer' />
              :
              <motion.img
                initial={{
                  rotate: 45
                }}
                animate={{
                  scale: 1,
                  rotate: 360,
                  transition
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 15,

                }}
                onClick={toogleFDarkMode}
                src={sun}
                className='cursor-pointer' />
          }

          <div className='w-[100px] border-dotted border-t  border-[#494e6e] my-6'></div>

              <div className='relative ml-4 mb-4'>
              <img src={profile} alt="profile-img" className='rounded-full h-[50px] mt-4'  />
              </div>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header