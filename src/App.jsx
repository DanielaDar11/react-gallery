import React from "react";
import images from './data/images.json';
import {useState} from 'react';
import next from './assets/next.svg';
import previous from './assets/previous.svg';
import random1 from './assets/random1.svg';
import random2 from './assets/random2.svg';
import Buton from './components/Buton'
import Galeria from "./components/Galeria";
import ImaginePrincipala from "./components/ImaginePrincipala";

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
    }

    function seteazaImagine(i){
        setImagine(i);
    }
    return (
    <>
    <h1>Imagini cu pisici</h1>
    <div className="oimagine">
        <ImaginePrincipala lista={listaImagini} i={imagine}/>
    </div>
    <div className="butoanele">
        <Buton func={urmatoareaImagine} imaginea={next}/>
        <Buton func={imagineAnterioara} imaginea={previous}/>
        <Buton func={imagineAleatoare} imaginea={random1}/>
        <Buton func={aranjareAleatoare} imaginea={random2}/>
    </div>
    <div className="container">
       <Galeria listaIMG={listaImagini} im={seteazaImagine} imagine={imagine} />
    </div>
    </>);
}

export default App;
