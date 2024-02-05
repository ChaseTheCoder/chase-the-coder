import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 m-10">
      <FontAwesomeIcon icon={faHammer} size='6x' className='text-green-600 mb-8' />
      <h1 className='text-xl md:text-2xl font-bold'>Blog under reconstruction as of Febrary 5, 2024</h1>
      <p>Transitioning my blog from Wordpress/PHP to Next.js.</p>
      <p>Blog should be up and running by March 2024.</p>
    </div>
  );
}
