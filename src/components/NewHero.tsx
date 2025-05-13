'use client'

import { motion } from 'framer-motion'
import { heroDetails } from '@/data/hero'

const NewHero = () => {
  return (
    <section className="relative flex flex-col-reverse items-center justify-center gap-6 bg-gradient-to-b from-black to-slate-800 px-6 py-12 md:flex-row md:gap-12 lg:gap-16 lg:px-16 lg:py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-2xl text-center md:text-left"
      >
        <h1 className="text-3xl leading-tight font-bold text-blue-500 sm:text-4xl lg:text-5xl">
          Web Development{' '}
          <span className="block text-white">Made Simple</span>
          <span className="relative mt-4 inline-block sm:mt-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="relative text-white italic"
            >
              Texas, were here to help!
            </motion.span>
            <motion.svg
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute bottom-[-2.2rem] left-0 w-full"
              viewBox="0 0 200 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M5 15 C50 25, 150 -5, 195 15"
                stroke="#2b7fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="w-2/5 max-w-[350px] md:w-1/3"
      >
        <img src={heroDetails.centerImageSrc} alt="hero image" />
      </motion.div>
    </section>
  )
}

export default NewHero
