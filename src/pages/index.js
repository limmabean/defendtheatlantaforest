import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

/*
    <img src="../images/forest.jpeg" width="100%" style={{
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0
    }}></img>
 */

const IndexPage = () => (
  <Layout >
    <Seo title="Home" />
    <div style={{
      position: "absolute",
      backgroundColor: "white",
      width: "100%",
      height: "241%",
      zIndex: "-1",
      left: "0",
      top: "0",
      opacity: "80%"
    }}></div>
    <h1>no cop city. no hollywood dystopia.</h1>
    <p>
    Atlanta is a city in a forest. We have the highest percentage of tree canopy of any major metropolitan area in America. Our canopy is the main factor in ensuring Atlanta’s resiliency in the face of climate change. The forest in Southeast Atlanta is home to wetlands that filter rainwater and prevent flooding. It is also one of the last breeding grounds for many amphibians in the region, as well as an important migration site for wading birds.
</p><p>
The history of this particular land is deeply scarred. In the 1800s shortly after the land was stolen from Muscogee Creek peoples, it was used as a plantation. In the early 1900s, a prison farm was opened where inmates were forced to perform unpaid agricultural labor,  marking the rebranding of slavery into for profit prison labor. The Atlanta Police Department currently uses this hallowed ground as a firing range.
</p><p>
This forest is at risk of destruction as the police and Hollywood make plans to pave over Atlanta’s largest remaining green space.
</p><p>
The Atlanta Police Department seeks to turn 300 acres of forest into a tactical training compound featuring a mock city. This project was recently announced to the shock of community members who had been given no opportunity to weigh in on the proposal.
The entire process has been shadier than the forest itself.
</p><p>
Intrenchment Creek is an existing public park adjacent to the Prison Farm. Dekalb County seeks to swap this land with Blackhall Studios, a major film production company. Blackhall wants to clear cut 170 acres of forest to develop into an airport and erect the largest sound stage in America. This project would cement Atlanta as the new Hollywood, making the cost of living in our city outrageous.
</p><p>
We refuse to let our forest be bulldozed in favor of the police and sold out to Hollywood. There are many forms of action and advocacy to be taken. This is a broad, decentralized, autonomous movement. Get involved in whatever ways move you. Take a walk in the forest with your friends.
</p><p>
To Defend the Atlanta Forest follow:
</p><p>
<ul>
  <li>Instagram: <a href="https://www.instagram.com/defendatlantaforest/">@defendatlantaforest</a></li>
  <li>Twitter: <a href="https://www.twitter.com/defendatlforest/">@DefendATLForest</a></li>
  <li>Telegram: <a href="t.me/DefendtheForestATL">t.me/DefendtheForestATL</a></li>
  <li>Facebook: <a href="https://www.facebook.com/DefendAtlantaForest">fb.com/DefendAtlantaForest</a></li>
  <li>Email: defendatlforest (at) protonmail (dot) com</li>
</ul>
</p><p>
    </p>
    <p>
    <iframe src="https://teamup.com/ksydou1ii8r6kdiun3?showProfileAndInfo=0&showSidepanel=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1" width="100%" height="800px" style={{border: '1px solid #cccccc'}} frameBorder="0"></iframe>
    </p>
  </Layout>
)

/*
Atlanta es una ciudad en el bosque. Tenemos la proporción más grande cubierta forestal de todas las areas metropolitanas en los EEUU. Nuestra cubierta forestal es el factor principal para asegurar la capacidad de adaptacion de Atlanta frente al cambio climático. El bosque del sureste de Atlanta es hogar de tierras humedas que filtran la lluvia y previenen las inundaciónes. También es uno de los criaderoa para muchos anfibios en la región, además un sitio importante de migración para las aves zancudas.

La historia de esta tierra en particular tiene cicatrices profundas. En el siglo XIX, después de robar las tierras de los pueblos indígenas de los Muscogee Creek, se convirtió en una plantación. A principios del siglo XX, se abrió una granja para la prisión que obligó los presos a trabajar, señalando el cambio de  imagen de la esclavitud a una cárcel laboral lucrativa. Actualmente la policía de Atlanta usa este terreno sagrado como un campo de tiro.

El bosque está en peligro de destrucción dado que la policía y Hollywood planean destruir este último espacio verde de Atlanta.


El departamento policial de Atlanta intenta convertir unas 300 hectáreas de bosque en un campo de entrenamiento táctico, incluyendo una ciudad simulada. El proyecto se anunció recientemente, sorprendiendo a los miembros de la comunidad dado que no dieron ninguna oportunidad para discutir la propuesta. El proceso entero ha sido más turbio que el río.

Intrenchment Creek es un parque público existente, al lado de la Prison Farm. El condado de Dekalb intenta intercambiar esta tierra con Blackhall Studios, una gran empresa de producciones de película. Blackhall quiere talar 170 hectáreas del bosque para desarrollar un aeropuerto y construir el escenario de sonido más grande en todo el país. Este proyecto convertirá a Atlanta en la nueva Hollywood, haciendo el costo de vida más caro que nunca.

Sent with ProtonMail Secure Email.

Nosotros nos negamos a dejar que nuestro bosque sea destruído en beneficio de la policía y vendido a Hollywood. Hay muchas formas para tomar accion. Tu puedes involucrarte en cualquiera forma que te inspire. Da un paseo en el bosque con tus amigxs!

Para defender al bosque de Atlanta, sigue:
Instagram: @defendatlantaforest
Twitter: @DefendATLForest
Telegram: t.me/DefendtheForestATL
Facebook: fb.com/DefendAtlantaForest
Correo: defendatlforest@protonmail.com
*/

export default IndexPage
