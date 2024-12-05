import React from 'react'
import TechStackOrbit from './TechStackOrbit'
import { TextRevealCard } from '@/components/ui/text-reveal-card'
import BoxReveal from '@/components/magicui/box-reveal'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import Image from 'next/image'
import profile from '../../public/profile2.png'
import { BorderBeam } from '@/components/magicui/border-beam'
import ProfileImage from './ProfileImage'

const AboutMe = () => {
  return (
    <div id='about' className='relative m-11 md:m-16 w-full md:w-[90%]'>
        <div className='flex flex-col-reverse items-center justify-center md:grid grid-cols-5'>
            <div className='col-span-3'>
                <h1 className='text-5xl md:text-7xl font-bold'>
                    Hi, I&apos;m Swanand <span className='hidden md:inline'>👋</span>
                </h1>
                
                <AnimatedShinyText shimmerWidth={100}  className='text-3xl pt-[2px] font-mono tracking-tighter'>
                     Full-Stack Web Developer
                </AnimatedShinyText>

                <p className='py-4 md:py-12 md:pr-12 tracking-wider'>
                    I&apos;m a passionate Full Stack Developer with hands-on experience in building dynamic web applications using NextJS, NodeJS, Tailwind CSS and various libraries. I&apos;ve contributed to multiple open-source initiatives and participated in hackathons.
                </p>
                <p>
                    <span className='dark:bg-gradient-to-r dark:from-slate-300 dark:to-gray-300 dark:bg-clip-text dark:text-transparent font-bold'>Fun Fact:</span> I'm a <span className='bg-gradient-to-r from-purple-900 dark:from-green-400 dark:to-lime-500  to-purple-500 bg-clip-text text-transparent font-bold font-sans text-xl tracking-wide hover:cursor-copy'>Bird-Watcher</span> and <span className='bg-gradient-to-r from-[#D15C5F] to-red-500 bg-clip-text text-transparent font-bold font-sans text-xl tracking-wide hover:cursor-copy'>Photography</span> enthusiast!
                </p>
            </div>
            <div className='col-span-2 p-2 border rounded-full relative flex items-center justify-center'>
                <div className='border border-purple-500 rounded-full '>
                    <ProfileImage />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe