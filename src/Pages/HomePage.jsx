import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Orb from "./../Components/"
import Herader from '../components/Nav/header/Herader.jsx';

function HomePage() {
    const [houss, setHouss] = useState(0)
    const [min, setmin] = useState(0)

  
  setInterval(() => {
    let now = new Date();
    setHouss(now.getHours())
    setmin(now.getMinutes())
  }, 2000);

  return (
    <div >
      <nav>
        <Nav />
      </nav>
      <div className='w-full'>
        <div className='w-full max-w-[500px] relative flex justify-center items-center h-[500px] py-[20px]'>
          <div className='w-full absolute rounded-[50px] h-[400px]'>
            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={200} forceHoverState={false} />
          </div>
          <h2 className='text-[52px] font-bold huse'>{houss} : {min}</h2>
        </div>
      </div>
    </div>
  )
}

export default HomePage