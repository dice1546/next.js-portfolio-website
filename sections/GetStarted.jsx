'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

const GetStarted = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={` ${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
		>
			<motion.div
				variants={planetVariants('left')}
				className={`flex-1 ${styles.flexCenter}`}
			>
				<img
					src='/getstarted.png'
					alt='get-started'
					className='w-[90%] h-[90%] object-contain'
				/>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] flex justify-center flex-col'
			>
				<TypingText title="| Let's Connect" />
				<TitleText title={<>Get Started with just a few clicks</>} />
				<div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
					{startingFeatures.map((feature, index) => (
						<StartSteps key={feature} number={index + 1} text={feature} />
					))}
				</div>
			</motion.div>
		</motion.div>
		<motion.div className='flex justify-center items-center'>
			<motion.button
				variants={fadeIn('up', 'tween', 0.6, 1)}
				type='button'
				className='flex items-center z-10 text-white mt-10 h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] outline-none transition-colors duration-300 hover:bg-gradient-to-r from-green-300 to-brown-300 hover:text-black'
			>
				<span className='font-normal text-[16px] text-white'>Contact Now</span>
				<img
					src='/forward.svg'
					alt='headset'
					className='w-[24px] h-[24px] object-contain'
				/>
			</motion.button>
		</motion.div>
	</section>
);

export default GetStarted;
