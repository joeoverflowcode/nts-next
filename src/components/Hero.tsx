'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { heroDetails } from '@/data/hero'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-5 pt-32 md:pt-40 pb-0 sm:pb-12"
    >
      {/* Background grid overlay */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-blue-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:40px_40px] " />
      </div>

      {/* Bottom gradient */}
      {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]" /> */}

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-lg md:max-w-2xl mx-auto md:mx-0">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto md:mx-0">
          {heroDetails.subheading}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto md:mx-0">
          {/* CTA buttons can go here */}
        </div>
      </div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        className="flex-1 max-w-[460px] w-full"
      >
        <Image
          src={heroDetails.centerImageSrc}
          width={260}
          height={460}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="app mockup"
          className="mx-auto md:mx-0"
        />
      </motion.div>
    </section>
  )
}

export default Hero
