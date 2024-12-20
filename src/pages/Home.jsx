import Banner from "../components/Banner"
import Benefits from "../components/Benefits"
import CallToAction from "../components/Cta"
import Faqsection from "../components/FAQ"

import FeatureSection from "../components/Feature"
import AssignmentsHighlight from "../components/Highlight"
import HowItWorks from "../components/HowToWork"

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <HowItWorks/>
      <Benefits/>
       <AssignmentsHighlight/>

      <CallToAction/>
     
    </div>
  )
}

export default Home
