import React from 'react'
import {
  FaBook,
  FaCog,
  FaDesktop,
  FaHeadset,
  FaInfinity,
  FaLaptop,
  FaLayerGroup,
  FaMobile,
  FaShieldAlt,
} from 'react-icons/fa'

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      title: '50+ Unique Design Block',
    },
    {
      icon: <FaLaptop className="text-blue-500" />,
      title: 'Multiple Layouts',
    },
    {
      icon: <FaMobile className="text-yellow-500" />,
      title: 'Mobile First Design',
    },
    {
      icon: <FaDesktop className="text-purple-500" />,
      title: 'Fully Responsive',
    },
    {
      icon: <FaCog className="text-teal-500" />,
      title: 'Customizable Features',
    },
    {
      icon: <FaHeadset className="text-green-500" />,
      title: 'Humanly Support',
    },
    {
      icon: <FaInfinity className="text-pink-500" />,
      title: 'Lifetime Updates',
    },
    {
      icon: <FaBook className="text-indigo-500" />,
      title: 'Rich Documentation',
    },
    {
      icon: <FaShieldAlt className="text-orange-500" />,
      title: 'Enhanced Security',
    },
  ]
  return (
    <div className="bg-pink-50 py-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold capitalize ">
          Its Everything you will ever need
        </h1>
        <div className="mt-6 text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 bg-gray-200 bg-opacity-10 flex items-center justify-center flex-col rounded-full">
                {feature.icon}
                </div>
              <p className='font-semibold'>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature
