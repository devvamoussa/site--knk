import React from 'react'
import NavConnecte from '../../pages/connectPages/NavConnecte'
import BodyRecherche from "./BodyRecherche"
import Footer from "../../content/Footer"
import "../../css/connectePageCss/rechercheCss/Recherche.css"



function Recherche() {
  return (
    <>
        <NavConnecte />
        <BodyRecherche />
        <Footer />
    </>
  )
}

export default Recherche;