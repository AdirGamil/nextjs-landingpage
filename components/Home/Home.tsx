import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature"
import Feature from "./Feature/Feature"
import Hero from "./Hero/Hero"
import Price from "./Price/Price"
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
        <Price />
    </div>
  )
}

export default Home