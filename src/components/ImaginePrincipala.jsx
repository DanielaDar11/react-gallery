import React from 'react'

function ImaginePrincipala({lista, i}) {
  return (
    <img src={lista[i].url}/>
  )
}

export default ImaginePrincipala