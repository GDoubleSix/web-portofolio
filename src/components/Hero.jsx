import profilepic from '../assets/pp-bw.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
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

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0' id="home">

        <div className='grid grid-cols-2 md:col-span-5 p-8 glass'>

            <img className='w-[800px]' src={profilepic} alt="profile picture" />

            <div className=' my-auto ml-8 flex-col text-gray-200'>
                <p className='text-xl md:text-4xl font-bold'>Hi! I am <br /> Muqi Gewa <br />
                <TypeAnimation 
                    sequence={[
                        "Fullstack Developer",
                        1000,
                        "Web Developer",
                        1000,
                        "Mobile Developer",
                        1000,
                    ]}  
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                </p>
                <p className='text-xl md:text-3xl font-semibold text-gray-400'>With a 1+ years experience</p>
                <button className='mt-4 px-4 py-2 text-lg font-bold text-white bg-primary-color rounded-xl'>Download CV</button>
            </div>
        </div>

        <div className='grid md:col-span-3 gap-6'>

                    <div className='text-5xl p-12 glass'>
                        <p className='text-gray-200 text-xl font-bold mb-4 text-center'>My Tech Stack</p>
                        <div className='grid grid-cols-4 gap-4'>
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

                    <div className='text-6xl gap-4 flex justify-center items-center glass text-gray-600'>
                        <AiFillGithub />
                        <AiFillLinkedin />
                        <AiFillInstagram />
                    </div>

        </div>

    </div>
  )
}

export default Hero