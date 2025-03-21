import React from 'react';

function Buton({func, imaginea}) {
    return (
      <button onClick={func}><img src={imaginea} alt="Buton" style={{width:"50px", heigth:"40px"}}  /></button>
    )
  }

  export default Buton;