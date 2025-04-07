import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
  return (
    <div id='features' className="pt-24 p-16">
      {/* Define grid */}
      <div className="w-[80%] md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div>
          <Image
            src="/images/a.jpg"
            alt="analytics"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-orange-500">
            Audience tracking and insights
          </h3>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Powerful analytics tools that put you in control and are fully
            customizable.
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi
            dolorem, sint ipsa voluptate maiores quidem. Velit tempora minus
            tempore aperiam enim, voluptate laborum doloremque.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-3 text-green-500" />
               Chat prompt module supported
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-3 text-green-500" />
              Enjoy unlimited features by paid plan
              </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="mr-3 text-green-500" />
              Manage ultimate conversation
              </li>
          </ul>
          <button className='mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-800 transition-all duration-200 cursor-pointer hover:text-white'>
            Explore More &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsFeature
