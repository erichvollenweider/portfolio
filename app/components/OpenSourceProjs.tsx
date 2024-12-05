import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BorderBeam } from '@/components/magicui/border-beam'
import { Separator } from '@/components/ui/separator'
import OpenSourceCards from './OpenSourceCards'


const OpenSourceProjs = () => {
  return (
    <div id='opensource'>
        <section className='m-11 md:m-16 w-full md:w-[90%]'>
          <Card className='relative z-10 bg-stone-50 dark:bg-gray-900/40 shadow-md'>
          <BorderBeam duration={18} size={200} />
          <CardHeader>
            <CardTitle>Open Source Projects I've worked on</CardTitle>
          </CardHeader>
          <Separator />
            <CardContent className='pt-6'>
              <OpenSourceCards />
            </CardContent>
          </Card>
        </section>
    </div>
  )
}

export default OpenSourceProjs