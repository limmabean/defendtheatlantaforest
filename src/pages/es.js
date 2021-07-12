import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"

const SpanishPage = () => (
  <Layout>
    <Seo title="Home"/>
    <br/>
    <h1 className={"body__motto"}>no cop city. no hollywood dystopia.</h1>
    <br/>
    <a className={"button button-primary button-large button-wide"}
       href={"https://actionnetwork.org/fundraising/forest-justice-defense-fund"}>
      Donar a Defend the Forest
    </a>
    <br/>
    <br/>
    <p>
      Atlanta es una ciudad en el bosque. Tenemos la proporción más grande cubierta forestal de todas las areas
      metropolitanas en los EEUU. Nuestra cubierta forestal es el factor principal para asegurar la capacidad de
      adaptacion de Atlanta frente al cambio climático. El bosque del sureste de Atlanta es hogar de tierras humedas que
      filtran la lluvia y previenen las inundaciónes. También es uno de los criaderoa para muchos anfibios en la región,
      además un sitio importante de migración para las aves zancudas.
    </p>
    <p>
      La historia de esta tierra en particular tiene cicatrices profundas. En el siglo XIX, después de robar las tierras
      de los pueblos indígenas de los Muscogee Creek, se convirtió en una plantación. A principios del siglo XX, se
      abrió una granja para la prisión que obligó los presos a trabajar, señalando el cambio de  imagen de la esclavitud
      a una cárcel laboral lucrativa. Actualmente la policía de Atlanta usa este terreno sagrado como un campo de tiro.
    </p>
    <p>
      El bosque está en peligro de destrucción dado que la policía y Hollywood planean destruir este último espacio
      verde de Atlanta.
    </p>
    <p>
      El departamento policial de Atlanta intenta convertir unas 300 hectáreas de bosque en un campo de entrenamiento
      táctico, incluyendo una ciudad simulada. El proyecto se anunció recientemente, sorprendiendo a los miembros de la
      comunidad dado que no dieron ninguna oportunidad para discutir la propuesta. El proceso entero ha sido más turbio
      que el río.
    </p>
    <p>
      Intrenchment Creek es un parque público existente, al lado de la Prison Farm. El condado de Dekalb intenta
      intercambiar esta tierra con Blackhall Studios, una gran empresa de producciones de película. Blackhall quiere
      talar 170 hectáreas del bosque para desarrollar un aeropuerto y construir el escenario de sonido más grande en
      todo el país. Este proyecto convertirá a Atlanta en la nueva Hollywood, haciendo el costo de vida más caro que
      nunca.
    </p>
    <p>
      Nosotros nos negamos a dejar que nuestro bosque sea destruído en beneficio de la policía y vendido a Hollywood.
      Hay muchas formas para tomar accion. Tu puedes involucrarte en cualquiera forma que te inspire. Da un paseo en el
      bosque con tus amigxs!
    </p>
    <h3>
      Para defender al bosque de Atlanta, sigue:
    </h3>
    <ul>
      <li>
        Instagram:
        <a className={"link"} href="https://www.instagram.com/defendatlantaforest/">
          @defendatlantaforest
        </a>
      </li>
      <li>
        Twitter:{" "}
        <a className={"link"} href="https://www.twitter.com/defendatlforest/">
          @DefendATLForest
        </a>
      </li>
      <li>
        Telegram:{" "}
        <a className={"link"} href="t.me/DefendtheForestATL">
          t.me/DefendtheForestATL
        </a>
      </li>
      <li>
        Facebook:{" "}
        <a className={"link"} href="https://www.facebook.com/DefendAtlantaForest">
          fb.com/DefendAtlantaForest
        </a>
      </li>
      <li>
        Correo: defendatlforest@protonmail.com
      </li>
    </ul>
    <a className={"button button-large button-primary-outline"}
       href={"https://linktr.ee/DefendAtlantaForest"}>
      Link Tree
    </a>
    <br/>
    <p>
      <iframe title="Teamup calendar for Defend the Atlanta Forest events"
              src="https://teamup.com/ksydou1ii8r6kdiun3?showProfileAndInfo=0&showSidepanel=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
              width="100%" height="800px" style={{border: '1px solid #cccccc'}} frameBorder="1"></iframe>
    </p>
    <div className={"row"}>
      <div className={"column"}>
        <Link
          to="/es"
          className={"button button-primary button-large"}
          disabled aria-disabled={"true"}
        >
          <FontAwesomeIcon icon={faLanguage} className={"button__icon"}/>
          En Español
        </Link>
        <Link
          to="/"
          className={"button button-primary button-large"}
        >
          <FontAwesomeIcon icon={faLanguage} className={"button__icon"}/>
          In English
        </Link>
      </div>
    </div>
  </Layout>
)

export default SpanishPage
