import React from 'react';
import Data from './Data'
import useFetch from './hooks/useFetch'

const Home = () =>{

  const {data,loading} = useFetch(`https://enrichman.github.io/covid19/world/full.json`)

  return(

    loading ?
   
    <div>Cargando los datos de hoy ...</div> 

    :
    
    <>
      <Data deaths={data.deaths} confirmed={data.confirmed} recovered={data.recovered}></Data>
    </>

  )
}

export default Home;
