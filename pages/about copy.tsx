import React from 'react'
import  Styles  from './about.module.css';
import Header from "./header";
import Footer from "./footer";
import Image from 'next/image'
import i1 from './land1.jpeg'
import i2 from './land2.jpeg'
import i3 from './land3.jpg'
function About() {
  return (
    <div>
      <Header/>
<div className='landpage'>



      <div className="card">
  <Image src={i1} className="card-img-top" width={50}height={50}  sizes="(max-width: 500px) 50vw,
              (max-width: 200px) 50vw,
              33vw" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Green land</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">BUY this land</a>
  </div>
</div>
<div className="card">
  <Image src={i2} className="card-img-top" width={50}height={50}  sizes="(max-width: 500px) 50vw,
              (max-width: 200px) 50vw,
              33vw" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Weath land</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">BUY this land</a>
  </div>
</div>
<div className="card">
  <Image src={i3} className="card-img-top" width={50}height={50}  sizes="(max-width: 500px) 50vw,
              (max-width: 200px) 50vw,
              33vw" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">BUY this land</a>
  </div>
</div>
<div className="card">
  <Image src={i1} className="card-img-top" width={50}height={50}  sizes="(max-width: 500px) 50vw,
              (max-width: 200px) 50vw,
              33vw" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">BUY this land</a>
  </div>
</div>







   
</div>
</div>
  )
}

export default About