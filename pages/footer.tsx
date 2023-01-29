import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-container flex-center ">
        <div className="about group">
          <h2>Aman</h2>
          <p>A programer ,A Developer, An Enginer</p>
          <a href="#about">About Me</a>
        </div>
        <div className="hr"></div>
        <div className="info group">
          <h3>More</h3>
          <ul>
            <li><a href="#aout">about</a></li>
            <li> <a href="#skills">skills</a></li>
           <li> <a href="#services">Services</a></li>
           <li><a href="#contact">Contact</a></li> 
          </ul>
        </div>
         <div className="hr"></div>
         <div className="follow group">
          <h3>Follow</h3>
          <ul>
           <li><a href=""><i className="fab fa-facebook"></i></a></li>
           <li><a href=""><i className="fab fa-instagram"></i></a></li>
           <li><a href=""><i className="fab fa-twitter"></i></a></li>
           <li><a href=""><i className="fab fa-linkedin"></i></a></li>
          </ul>
         </div>
         
      </div>
      <div className="end group flex-center">
        <p>thank you by <span>Aman Dhananjay</span></p>
      </div>
     </footer>
  );
}

export default Footer
