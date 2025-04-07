import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

type Props = {
  name: string
  image: string
}
const ReviewCard = ({ name, image }: Props) => {
  return (
    <div className="w-full relative bg-white p-12 flex flex-col items-center space-y-3">
      <FaQuoteLeft className="h-14 w-14 opacity-10 absolute top-0 left-4" />
      <div className="grid lg:grid-cols-5 gap-6 items-center">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm md:text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam
            placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium,
            explicabo fugit.
          </p>
          <div className="flex items-center mt-6">
            <FaStar className="h-6 w-6 text-yellow-600" />
            <FaStar className="h-6 w-6 text-yellow-600" />
            <FaStar className="h-6 w-6 text-yellow-600" />
            <FaStar className="h-6 w-6 text-yellow-600" />
            <FaStar className="h-6 w-6 text-yellow-600" />
          </div>
          <h1 className="text-xl font-semibold mt-8">{name}</h1>
          <p className="mt-2 text-lg text-gray-600 font-medium mb-6">
            Fullstack Developer
          </p>
        </div>
        <div className="col-span-2 order-1 lg:order-2">
          <Image
            src={image}
            alt={name}
            width={350}
            height={250}
            className=" rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
export default ReviewCard

