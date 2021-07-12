import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
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
  <Layout>
    <Seo title="Home"/>
    <br/>
    <h1 className={"body__motto"}>no cop city. no hollywood dystopia.</h1>
    <br/>
    <a className={"button button-primary button-large button-wide"}
            href={"https://actionnetwork.org/fundraising/forest-justice-defense-fund"}>
      Donate to Defend the Forest
    </a>
    <br/>
    <br/>
    <p>
      Atlanta is a city in a forest. We have the highest percentage of tree canopy of any major metropolitan area in
      America. Our canopy is the main factor in ensuring Atlanta’s resiliency in the face of climate change. The forest
      in Southeast Atlanta is home to wetlands that filter rainwater and prevent flooding. It is also one of the last
      breeding grounds for many amphibians in the region, as well as an important migration site for wading birds.
    </p>
    <p>
      The history of this particular land is deeply scarred. In the 1800s shortly after the land was stolen from
      Muscogee Creek peoples, it was used as a plantation. In the early 1900s, a prison farm was opened where inmates
      were forced to perform unpaid agricultural labor,  marking the rebranding of slavery into for profit prison labor.
      The Atlanta Police Department currently uses this hallowed ground as a firing range.
    </p>
    <p>
      This forest is at risk of destruction as the police and Hollywood make plans to pave over Atlanta’s largest
      remaining green space.
    </p>
    <p>
      The Atlanta Police Department seeks to turn 300 acres of forest into a tactical training compound featuring a mock
      city. This project was recently announced to the shock of community members who had been given no opportunity to
      weigh in on the proposal. The entire process has been shadier than the forest itself.
    </p>
    <p>
      Intrenchment Creek is an existing public park adjacent to the Prison Farm. Dekalb County seeks to swap this land
      with Blackhall Studios, a major film production company. Blackhall wants to clear cut 170 acres of forest to
      develop into an airport and erect the largest sound stage in America. This project would cement Atlanta as the new
      Hollywood, making the cost of living in our city outrageous.
    </p>
    <p>
      We refuse to let our forest be bulldozed in favor of the police and sold out to Hollywood. There are many forms of
      action and advocacy to be taken. This is a broad, decentralized, autonomous movement. Get involved in whatever
      ways move you. Take a walk in the forest with your friends.
    </p>
    <h3>
      To Defend the Atlanta Forest follow:
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
        Email:{" "}
        defendatlforest (at) protonmail (dot) com
      </li>
    </ul>
    <a className={"button button-large button-primary-outline"}
       href={"https://linktr.ee/DefendAtlantaForest"}>
      Link Tree
    </a>
    <br/>
    <br/>
    <p>
      <iframe title="Teamup calendar for Defend the Atlanta Forest events"
              src="https://teamup.com/ksydou1ii8r6kdiun3?showProfileAndInfo=0&showSidepanel=1&showAgendaHeader=1&showAgendaDetails=0&showYearViewHeader=1"
              width="100%" height="800px" style={{border: '1px solid #cccccc'}} frameBorder="1"></iframe>
    </p>
    <Link
      to="/es"
      className={"button button-primary button-large"}
      aria-label={"Traducir al español"}
      aria-pressed={"false"}
      role={"button"}
    >
      <FontAwesomeIcon icon={faLanguage} className={"button__icon"}/>
      En Español
    </Link>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
      className={"button button-primary button-large"}
      disabled
      aria-pressed={"true"}
      aria-label={"Translate to English"}
      role={"button"}
    >
      <FontAwesomeIcon icon={faLanguage} className={"button__icon"}/>
      In English
    </Link>
  </Layout>
)

export default IndexPage
