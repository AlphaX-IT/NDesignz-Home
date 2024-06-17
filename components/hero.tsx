import Image from 'next/image'
import React from 'react'
import HeroBG from "@/public/images/asset_23.jpg"
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='max-w-full h-[750px] w-full flex flex-col items-center justify-center gap-4 bg-black/10 bg-center bg-cover' style={{backgroundImage:`url("/images/asset_02.jpg")`}}>
      <div className='flex flex-col items-center justify-center text-center max-w-5xl'>
        <h1 className='text-white text-8xl leading-tight '>Creating Homes That Tell Your Story</h1>
        <p className='text-white/90  mt-3 max-w-xl text-2xl'>Making your home so beautiful, you'll never want to leave</p>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <Button>Lets Talk</Button>
        <Button className='group'><span className='group-hover:border-b border-gold-500 border-dashed'>Visit our Gallery</span></Button>
      </div>
    </section>
  )
}

export default Hero
