'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex 
      lg:flex-row flex-col gap-6`}
		>
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 1)}
				className='flex-[0.5] lg:max-w-[370px] 
        flex justify-end flex-col gradient-05 sm:p-8 p-4 
        rounded-[32px] border-[1px] border-[#6a6a6a] realtive'
			>
				<div className='feedback-gradient' />
				<div>
					<h4
						className='font-bold sm:text-[32px] 
          text-[26px] sm:leading-[40px] 
          leading-[36px] text-white'
					>
						Daniyal Afaqi
					</h4>
					<p
						className='mt-[8px] font-normal sm:text-[18px] 
          text-[12px] sm:leading-[22px] leading-[16px] text-white'
					>
						Developer | Daniyal Dev
					</p>
				</div>
				<p
					className='mt-[24px] font-normal sm:text-[24px] 
          text-[18px] sm:leading-[45px] leading-[39px] text-white'
				>
					"Modern Web and Android Apps Built with Latest Technologies. Easily
					scalable and maintainable."
				</p>
			</motion.div>
			<motion.div
				variants={fadeIn('left', 'tween', 0.2, 1)}
				className='relative flex-1 flex justify-center items-center'
			>
				<img
					src='/planet-09.png'
					alt='planet-09'
					className='w-full lg:h-[610px] 
          h-auto min-[210px] object-cover 
          rounded-[40px]'
				/>
				<motion.div
					variants={zoomIn(0.4, 1)}
					className='lg:block hidden absolute 
          -left-[10%] top=[3%]'
				>
					<Link href='/contact'>
						<div
							className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full 
              bg-blue-gradient p-[5px] cursor-pointer 
             hover:bg-black shadow-xl transition-colors duration-300 
              md:w-[130px] md:h-[130px] sm:w-[130px] sm:h-[130px] xs:w-[130px] xs:h-[130px]`}
						>
							<div
								className={`${styles.flexCenter} flex-col bg-white hover:bg-blue-gradient w-[100%] h-[100%] rounded-full`}
							>
								<div className={`${styles.flexStart} flex-row`}>
									<p className='font-poppins font-medium text-[22px] leading-[23.4px]'>
										<span className='text-gradient hover:text-red-500'>
											Get
										</span>
									</p>
									<img
										src='/arrow-up.svg'
										alt='arrow-up'
										className='w-[23px] h-[23px] object-contain'
									/>
								</div>

								<p className='font-poppins font-medium text-[22px] leading-[23.4px]'>
									<span className='text-gradient hover:text-red-500'>
										Started
									</span>
								</p>
							</div>
						</div>
					</Link>
				</motion.div>
			</motion.div>
		</motion.div>
	</section>
);

export default Feedback;
