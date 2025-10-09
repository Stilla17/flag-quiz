import React from 'react'
import Nav from '../components/Nav/Nav'
import Orb from '../components/OrbReact/Orb.jsx'

function HomePage() {

  let now = new Date();
  const house = now.getHours();
  const minutes = now.getMinutes();
  return (
    <div>
        <nav>
            <Nav />
        </nav>
        <div className='w-full'>
        <div className='w-full max-w-[500px] relative flex justify-center items-center h-[500px] py-[20px]'>
            <div className='w-full absolute rounded-[50px] h-[400px]'>
                <Orb hoverIntensity={0.5} rotateOnHover={true} hue={200} forceHoverState={false}/>
            </div>
            <h2 className='text-[52px] font-bold huse'>{house} : {minutes}</h2>
        </div>
        </div>
    </div>
  )
}

export default HomePage
