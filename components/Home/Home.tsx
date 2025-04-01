import FadeInWhenVisible from '../Helper/FadeInWhenVisible'
import AnalyticsFeature from './AnalyticsFeature/AnalyticsFeature'
import Feature from './Feature/Feature'
import Hero from './Hero/Hero'
import Price from './Price/Price'
import Review from './Review/Review'
import WhyChoose from './WhyChoose/WhyChoose'

const Home = () => {
  return (
    <div className="overflow-hidden space-y-20">
      <FadeInWhenVisible delay={0.2} variant="fade-up">
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3} variant="fade-left">
        <WhyChoose />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3} variant="fade-right">
        <AnalyticsFeature />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3} variant="zoom-in">
        <Feature />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3} variant="fade-up">
        <Review />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.3} variant="fade-left">
        <Price />
      </FadeInWhenVisible>
    </div>
  )
}

export default Home
