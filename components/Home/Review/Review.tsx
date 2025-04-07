'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReviewCard from './ReviewCard'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const Review = () => {
  return (
    <div className="py-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What client say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
          showDots={true}
          responsive={responsive}
        >

            <ReviewCard name="John Doe" image="/images/c1.png" />
            <ReviewCard name="Mike Jhon" image="/images/c2.png" />
            <ReviewCard name="Luis Peter" image="/images/c1.png" />
            <ReviewCard name="Harry Potter" image="/images/c2.png" />
        </Carousel>
      </div>
    </div>
  )
}

export default Review
