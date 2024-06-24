import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import LadiesCollections from '../components/LadiesCollections'

import { Gents, Ladies } from '../../data'


function Mainpage() {

  const [gentsFashion, setGentsFashion]= useState(Gents);
  const [ladiesFashion, setLadiesFashion]= useState(Ladies);
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion}/>
        <LadiesCollections ladiesFashion={ladiesFashion}/>
        <Footer />

    </div>
  )
}

export default Mainpage