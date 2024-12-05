import React from 'react'
import TechStackOrbit from './TechStackOrbit'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ToolsCloud from './ToolsCloud';
import { BorderBeam } from '@/components/magicui/border-beam';

const TechStack = () => {
  return (
    <div id='skills'>
        <div className='flex items-center justify-center m-11 md:m-16 w-full md:w-[90%]'>
          <Card className='relative bg-stone-50 dark:bg-gray-900/40 shadow-md pt-6'>
            <BorderBeam duration={18} size={200} />
            <CardContent className='flex flex-col md:grid grid-cols-2 gap-4 '>
              <Card className=''>
                <TechStackOrbit />
              </Card>
              <Card className=''>
                <CardHeader className='flex items-center justify-center'>
                  <h1 className=" pointer-events-none whitespace-pre-wrap text-3xl md:text-5xl bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-center font-bold leading-none flex flex-col absolute pt-8">Tools I Use</h1> 
                </CardHeader>
                <CardContent>
                  <ToolsCloud />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

    </div>
  )
}

export default TechStack