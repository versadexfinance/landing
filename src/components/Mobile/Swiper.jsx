import React from 'react'
import Check from './image/check.svg'
import Check2 from './image/check2.svg'
import Check3 from './image/check3.svg'
import Check4 from './image/check4.svg'
import data from "./data";
import Card from "./Card";
import Marquee from "react-fast-marquee";
function Swiper() {
    const comps = data.map((item) => {
        return <Card name={item.name} />;
      });
  return (
    <div>  
        
        <Marquee gradient={false} className="marquee">     &nbsp;&nbsp;&nbsp;
     <img src={Check}/>
     &nbsp;&nbsp;&nbsp;
     <img src={Check2}/>
     &nbsp;&nbsp;&nbsp;

     <img src={Check3}/>
     &nbsp;&nbsp;&nbsp;

     <img src={Check4}/>
  </Marquee></div>
  )
}

export default Swiper