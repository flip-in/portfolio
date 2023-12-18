'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5);

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-5 dark:text-white/80 '>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:hello@william.price.dev'>
          hello@williamprice.dev{' '}
        </a>{' '}
        or through this form
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully');
        }}
        className='mt-10 flex flex-col dark:text-black'
      >
        <input
          type='email'
          name='senderEmail'
          required
          maxLength={500}
          className='h-14 rounded-lg borderBlack px-4 focus:ring-2 focus:ring-gray-900 focus:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
          placeholder='Your email'
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4 focus:ring-2 focus:ring-gray-900 focus:outline-none dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
