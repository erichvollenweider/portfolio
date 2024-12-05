import { BorderBeam } from '@/components/magicui/border-beam'
import NumberTicker from '@/components/magicui/number-ticker'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const NumberTickers = () => {
  return (
    <div>
      <div className='m-11 md:m-16 w-full md:w-[90%]'>
        <Card className='relative z-10 bg-stone-50 dark:bg-gray-900/40 shadow-md'>
            <BorderBeam duration={18} size={200} />
            <CardHeader className='flex items-center md:items-start justify-center'>
                <CardTitle>Stats</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className='grid grid-cols-2 md:flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 pt-4'>
            <div className='flex flex-col items-start md:items-center justify-center gap-2'>
              <h3 className='text-xl text-muted-foreground'>Projects Built</h3>
              <h1 className='text-4xl font-bold'>
                <NumberTicker value={30}/>
              </h1>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center gap-2'>
              <h3 className='text-xl text-muted-foreground'>Open Source Contributions</h3>
              <h1 className='text-4xl font-bold'>
                <NumberTicker value={14}/>
              </h1>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center gap-2'>
              <h3 className='text-xl text-muted-foreground'>Github Repos</h3>
              <h1 className='text-4xl font-bold'>
                <NumberTicker value={42}/>
              </h1>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center gap-2'>
              <h3 className='text-xl text-muted-foreground'>Github Issues Raised</h3>
              <h1 className='text-4xl font-bold'>
                <NumberTicker value={27}/>
              </h1>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center gap-2'>
              <h3 className='text-xl text-muted-foreground'>Github PRs</h3>
              <h1 className='text-4xl font-bold'>
                <NumberTicker value={18}/>
              </h1>
            </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NumberTickers