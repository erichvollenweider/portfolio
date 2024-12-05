import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile3.png'
import { BorderBeam } from '@/components/magicui/border-beam'


const ProfileImage = () => {
  return (
    <div className='rounded-full'>
        <BorderBeam borderWidth={2} colorFrom='#1D77A6' colorTo='#D15C5F' duration={10}/>
        <Image src={profile} alt='profile' height={600} width={600} className=''/>

    </div>
  )
}

export default ProfileImage