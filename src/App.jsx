import React from "react";
import images from './data/images.json';
import {useState} from 'react';

function App() {
    const [imagine, setImagine]=useState(0);
    const [listaImagini, setListaImagini]=useState(images);
    
   function urmatoareaImagine(){
    setImagine((img)=>( img<images.length-1?img+1 : 0));
   }

   function imagineAnterioara(){
    setImagine((img)=>(img===0?images.length-1:img-1));
   } 

   function imagineAleatoare(){
    setImagine(Math.floor(Math.random()*images.length));
   }
    function aranjareAleatoare(){
        setListaImagini([...listaImagini].sort(()=>Math.random()-0.5));
         setImagine(0);
    }
    return (
    <>
    <h1>Imagini cu pisici</h1>
    <div className="oimagine"><img src={listaImagini[imagine].url}/></div>
    <div className="butoanele">
        <button onClick={urmatoareaImagine}>Următoarea imagine</button>
        <button onClick={imagineAnterioara}>Imaginea Anterioară</button>
        <button onClick={imagineAleatoare}>Imagine Aleatoare</button>
        <button onClick={aranjareAleatoare}>Aranjare Aleatoare</button>
    </div>
    <div className="container">
       {listaImagini.map((el, index)=>{
       return  <img key={el.id} src={el.url} alt={el.title}  className={index===imagine?'selectat':''}/>
       })}
    </div>
    </>);
}

export default App;
