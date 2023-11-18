'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Link from 'next/link';
const Hero = () => (
	<section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col`}
		>
			<div className='flex justify-center items-center flex-col relative z-10'>
				<motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
					Turn Ideas into
				</motion.h1>
				<motion.div
					variants={textVariant(1.2)}
					className='flex flex-row justify-center items-center'
				>
					<h1 className={styles.heroHeading}>Reality</h1>
				</motion.div>
			</div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='relative w-full md:-mt-[20] -mt-[12px]'
			>
				<div
					className='absolute w-full h-[300px] 
        hero-gradient rounded-tl-[140px] z-[0] 
        -top-[30px]'
				/>
				<img
					src='/cover.png'
					alt='cover'
					className='w-full sm:h-[600px] 
            h-[250px] object-cover
            rounded-tl-[140px] z-10 relative'
				/>
				<Link href='/contact'>
					<div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
						<motion.button
							type='button'
							className='flex items-center z-10 text-white mt-10 h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] outline-none transition-colors duration-300 hover:bg-gradient-to-r from-green-300 to-brown-300 hover:text-black'
						>
							<span className='font-normal text-[16px] text-white'>
								Get Started
							</span>
							<img
								src='/forward.svg'
								alt='headset'
								className='w-[24px] h-[24px] object-contain'
							/>
						</motion.button>
					</div>
				</Link>
			</motion.div>
		</motion.div>
	</section>
);

export default Hero;
