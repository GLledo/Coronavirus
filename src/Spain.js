import React from 'react';
import DataList from './Data'
import useFetch from './hooks/useFetch'
const Spain = () =>{

  const {data,loading} = useFetch(`https://enrichman.github.io/covid19/world/spain/data.json`)

  return(

    loading ?
   
    <div>Cargando los datos de hoy ...</div> 

    :
    
    <>
      <DataList deaths={data.deaths} confirmed={data.confirmed} recovered={data.recovered}></DataList>
    </>

  )
}

export default Spain;
