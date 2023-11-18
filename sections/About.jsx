'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className='gradient-02 z-0' />
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TypingText title='| About Daniyal Dev' textStyles='text-center' />

			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className='mt-[8px] z-10 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
			>
				<span className='font-extrabold text-white'>Welcome</span> to my
				portfolio website. I am{' '}
				<span className='font-extrabold text-white'>Daniyal</span>. I build web
				and mobile apps which bring your ideas to life. Whether it's the dynamic
				realm of{' '}
				<span className='font-extrabold text-white'>Web Development</span> or
				the ever-evolving{' '}
				<span className='font-extrabold text-white'>Mobile Development </span>
				landscape, I am a full-stack developer, crafting digital experiences
				that transcend boundaries.{' '}
			</motion.p>

			<motion.img
				variants={fadeIn('up', 'tween', 0.3, 1)}
				src='/arrow-down.svg'
				alt='arrow down'
				className='w-[18px] h-[28px] object-contain mt-[28px]'
			/>
		</motion.div>
	</section>
);

export default About;
