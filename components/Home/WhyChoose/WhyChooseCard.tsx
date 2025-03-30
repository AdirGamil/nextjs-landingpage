import Image from 'next/image'

type Props = {
  image: string
  title: string
  linkText: string
}

const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
      />
      <h1 className="text-center text-lg my-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-center text-gray-600 text-sm font-medium mb-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime.
        Lorem, ipsum.
      </p>
      <button className="flex items-center mx-auto font-semibold text-blue-900 hover:text-blue-950 transition-all cursor-pointer duration-200">
        {linkText} &#8594;
      </button>
    </div>
  )
}

export default WhyChooseCard
