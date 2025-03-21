import React from 'react'

function Galeria({listaIMG, im, imagine}) {
  return (<>
    {listaIMG.map((el, index)=>{
        return  <img key={el.id} src={el.url} alt={el.title} onClick={()=>im(index)} className={index===imagine?'selectat':""}/>
        })}
        </>
  )
}

export default Galeria;