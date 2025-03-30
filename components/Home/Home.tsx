import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature"
import Feature from "./Feature/Feature"
import Hero from "./Hero/Hero"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <WhyChoose />
        <AnalyticsFeature />
        <Feature />
    </div>
  )
}

export default Home