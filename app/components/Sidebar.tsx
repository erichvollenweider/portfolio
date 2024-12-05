"use client"
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Separator } from '@/components/ui/separator'
import { ArrowRightIcon, ArrowRightSquare, SeparatorHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='h-full w-56 fixed bg-stone-50 dark:bg-gray-900/10  flex flex-col justify-between items-end py-10 pr-2'>
        <div className='my-auto flex flex-col items-end justify-center gap-4 h-screen pr-10 '>
            <span className="inline-block relative cursor-pointer group hover:text-primary/90">
                <Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="flex items-center justify-center gap-1">
                    About Me 
                    <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRightIcon className="h-5 w-5" />
                    </span>
                </Link>
            </span>
            
            <span className="inline-block relative cursor-pointer group hover:text-primary/90">
                <Link href="#skills" onClick={(e) => handleScroll(e, 'skills')} className='flex items-center justify-center gap-1'>
                    Skills <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1"><ArrowRightIcon size={20}/></span>
                </Link>
            </span>
            <span className="inline-block relative cursor-pointer group hover:text-primary/90">
                <Link href="#projects" onClick={(e) => handleScroll(e, 'projects')} className='flex items-center justify-center gap-1'>
                    Projects <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1"><ArrowRightIcon size={20}/></span>
                </Link>
            </span>
            <span className="inline-block relative cursor-pointer group hover:text-primary/90">
                <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className='flex items-center justify-center gap-1'>
                    Contact <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1"><ArrowRightIcon size={20}/></span>
                </Link>
            </span>
        </div>
        <div className='text-xs mx-auto'>
            <HoverBorderGradient>Swanand Deshpande</HoverBorderGradient>
        </div>
        <div className=''>
            <div className="absolute inset-y-20 left-56 bg-gradient-to-b from-transparent via-purple-500 to-transparent w-[2px] h-3/4 blur-sm" />
            <div className="absolute inset-y-20 left-56 bg-gradient-to-b from-transparent via-purple-500 to-transparent w-px h-3/4" />
            <div className="absolute inset-y-60 left-56 bg-gradient-to-b from-transparent via-orange-500 to-transparent w-[5px] h-1/4 blur-sm" />
            <div className="absolute inset-y-60 left-56 bg-gradient-to-b from-transparent via-orange-500 to-transparent w-px h-1/4" />
        </div>

        
    </div>
  )
}

export default Sidebar