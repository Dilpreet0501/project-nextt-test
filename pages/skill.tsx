import React from "react" 
import Header from "./header";
import Footer from "./footer";
   function Skill() {
    
    return(
      <div>
        <Header/>
<div className="sell">
        <div className="input-group mb-3">
  <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
  <input
    type="search"
    className="form-control rounded"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="search-addon"
  />
</div>

<div className="input-group mb-3">
  <span className="input-group-text border-0" id="basic-addon1"></span>
  <input
    type="text"
    className="form-control rounded"
    placeholder="Addrees"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</div>

<div className="input-group mb-3">
  <input
    type="text"
    className="form-control rounded"
    placeholder="mail id"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
  <span className="input-group-text border-0" id="basic-addon2">@gmail.com</span>
</div>

<label  className="form-label">Your vanity  Land id</label>
<div className="input-group mb-3">
  <span className="input-group-text border-0" id="basic-addon3"></span>
  <input
    type="text"
    className="form-control rounded"
    id="basic-url3"
    aria-describedby="basic-addon3"
  />
</div>

<div className="input-group mb-3">
  <span className="input-group-text border-0">Rs-</span>
  <input
    type="text"
    className="form-control rounded"
    aria-label="Amount (to the nearest dollar)"
  />
  <span className="input-group-text border-0">.00</span>
</div>

<div className="input-group">
  <span className="input-group-text border-0">With tex</span>
  <textarea className="form-control rounded" aria-label="With textarea"></textarea>
</div>
  

  

</div>

<Footer/>


  </div>
    )
}
export default Skill