'use client';

import Image from 'next/image';
import React from 'react';
import profileImage from '../public/William - small.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[40rem] text-center sm:mb-0 scroll-mt-96'
      id='home'
    >
      <div className='flex items-center justify-center'>
        <div className='relative mb-4 sm:mb-0'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profileImage}
              alt='William portrait'
              width={192}
              height={192}
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl mb-4'
            />
          </motion.div>
          {/* <motion.span
            className='text-4xl absolute bottom-0 right-0'
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4, px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span className='font-bold'>Hello, I&apos;m William.</span>
        <br className='mb-4'></br> I&apos;m a{' '}
        <span className='font-bold'>full-stack developer</span> with{' '}
        <span className='font-bold'>4 years</span> of experience.
        <br className='mb-4'></br> I enjoy building{' '}
        <span className='italic'>interactive sites and mobile apps</span> in{' '}
        <span className='underline'>React</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium'
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group'
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection('Contact');
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          href='/William Price Software Developer CV.pdf'
          download
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 '
        >
          Download CV{' '}
          <HiDownload className='group-hover:translate-y-1 transition opacity-70' />
        </a>
        <div className='flex gap-2'>
          <a
            href='https://www.linkedin.com/in/price-william-alexander/'
            target='_blank'
            className='bg-white text-[1.45rem] text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60'
          >
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/flip-in'
            target='_blank'
            className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.6rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 '
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
