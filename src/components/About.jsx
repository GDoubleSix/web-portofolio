import project1 from '../assets/project1.png'
import property from '../assets/Property.jpg'
import{
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiPhp,
  DiLaravel,
  DiGit
} from 'react-icons/di'

const About = () => {
  return (
    <div className='max-w-[1000px] mt-24 mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id="about">
      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Skills</h2>
        <p className='text-gray-300 mb-4'>
          As a passionate web front-end developer with over 1 years of experience, I have a proven track record of createing visually stunning and responsive websites.
        </p>
        <div className='flex flex-wrap gap-4 text-4xl justify-center'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiBootstrap className='text-purple-600' />
          <DiJavascript1 className='text-yellow-500' />
          <DiReact className='text-blue-500' />
          <DiNodejsSmall className='text-green-500' />
          <DiPhp className='text-blue-500' />
          <DiLaravel className='text-red-500' />
          <DiGit className='text-red-500' />
        </div>
    </div>

    <div className='relative group max-w-[600px] mx-auto mt-8'>
      <div className='absolute w-full h-full mt-4 -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
      <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
        <img src={project1} alt="project 1" className='rounded-lg w-full md:max-w-[360px] mx-auto'/>
      </div>
    </div>

    <div className='relative group max-w-[600px] mx-auto mt-8'>
      <div className='absolute w-full h-full mt-4 -inset-1 bg-gradient-to-r from-purple-700 to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
      <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
            <img src={property} alt="property" className='rounded-lg md:max-w-[390px]'/>
      </div>
    </div>

        <div className='p-6 order-1 md:order-2'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
          <p className='text-gray-300 mb-4'>
            Experienced in creating modern, responsive web application using the latest frontend technologies
          </p>
        </div>
      </div>
  )
}

export default About