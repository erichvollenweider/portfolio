import React from 'react'
import ProjectCards from './ProjectCards'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Separator } from '@/components/ui/separator'


const Projects = () => {
  return (
    <div id='projects'>
        <section className='m-11 md:m-16 w-full md:w-[90%]'>
          <Card className='relative z-10 bg-stone-50 dark:bg-gray-900/40 shadow-md'>
          <BorderBeam duration={18} size={200} />
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <Separator />
            <CardContent className='pt-6'>
              <ProjectCards />
            </CardContent>
          </Card>
        </section>
    </div>
  )
}

export default Projects