
"use client";

import About from "./about/page";
import Contact from "./contact/page";
import Menu from "./menu/page"
import Image from 'next/image';
import Header from './header/header';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter(); 

  const handleClick = () => {
    router.push('/menu'); 
  };

  return (
    <section>
      <div  className="relative w-full min-h-screen">
      <Image 
        src="/burger-home-bg.jpg" 
        alt="Home Page Background" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0"
        quality={100} 
      />
      <Header />
      <div className='absolute left-4 sm:left-8 md:left-[100px] top-16 sm:top-20 md:top-[200px] bg-[rgba(0,0,0,0.5)] p-4 sm:p-6 md:px-10 font-bold max-w-[90%] md:max-w-[60%]'>
        <h1 className='py-1 text-red-500 text-3xl sm:text-4xl md:text-[60px] leading-snug sm:leading-normal'>
          "Discover the <div className='text-yellow-400'>Taste of Happiness!"</div>
        </h1>
        <p className='py-2 sm:py-4 text-white text-base sm:text-lg md:text-[23px] mb-2'>
          Welcome to our restaurant where we serve the most delicious meals. Ready to explore?
        </p>
        <button 
          className="mt-4 sm:my-6 px-4 py-2 sm:py-3 bg-red-500 text-yellow-200 text-base sm:text-lg md:text-[18px] rounded-lg shadow-lg hover:bg-red-800 animate-bounce-on-hover"
          onClick={handleClick} 
        >
          Explore Our Menu
        </button>
        </div>
      </div>
    
      <Menu/>
      <About/>
      <Contact/>
    </section>
  );
}
