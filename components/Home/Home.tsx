import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature"
import Feature from "./Feature/Feature"
import Hero from "./Hero/Hero"
import Review from "./Review/Review"
import WhyChoose from "./WhyChoose/WhyChoose"

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <WhyChoose />
        <AnalyticsFeature />
        <Feature />
        <Review />
    </div>
  )
}

export default Home