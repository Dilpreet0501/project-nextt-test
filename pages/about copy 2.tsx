import React from 'react'
import  Styles  from './about.module.css';
import Header from "./header";
import Footer from "./footer";
import Image from 'next/image'
import i1 from './land1.jpeg'
import i2 from './land2.jpeg'
import i3 from './land3.jpg'
function Land1() {
  return (
    <div>
      <Header/>
<div className='land'>
<Image src={i1} className="card-img-top" width={50}height={50}  sizes="(max-width: 500px) 50vw,
              (max-width: 200px) 50vw,
              33vw" alt="..."/>
 <div className='cont'>
<h2>Green land</h2>
<p><b>Address :</b> dont know</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse perferendis quae architecto atque fuga neque voluptatem sed iste asperiores beatae qui ipsum accusamus, itaque, culpa suscipit in laboriosam porro?</p>
<p><b>prize :</b> 2,000,000 Rs</p>

</div>


     






   
</div>
</div>
  )
}

export default Land1