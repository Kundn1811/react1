import React from "react";
let Logo = ()=>{
    return (
        <div className="logo">
            <h3>LOGOBAKERY</h3>
        </div>
    )
}

let Links =()=>{
    return (
      <div className="links">
          <a href="">Service</a><a href="">Project</a><a href="">About</a>
      </div>
    )
}

let Button = ()=>{
 return (
     <div className="btn">
         <button>Contact</button>
     </div>
 )
}

export {Logo,Links,Button}