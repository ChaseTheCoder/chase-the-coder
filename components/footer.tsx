import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
  return (
    <footer className='flex justify-between max-w-6xl mx-6 md:mx-10 lg:mx-auto'>
      <div className="flex flex-col items-center justify-center w-full">
        <hr className="w-64 h-px my-2 bg-gray-200 border-0" />
        <span className="mt-1 mb-2">Chase The Coder</span>
        <div className='flex flex-row gap-6'>
          <a
            className="text-gray-500 hover:text-black flex flex-col gap-1"
            href="https://www.linkedin.com/in/chasethecoder/"
            target='blank'
          >
            <FontAwesomeIcon icon={faLinkedin} size='lg' className='text-green-600'/>
            LinkedIn
          </a>
          <a
            className="text-gray-500 hover:text-black flex flex-col gap-1"
            href="https://github.com/ChaseTheCoder"
            target='blank'
          >
            <FontAwesomeIcon icon={faGithub} size='lg' className='text-green-600'/>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}