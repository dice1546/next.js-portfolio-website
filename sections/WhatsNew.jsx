'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
		>
			<motion.div
				variants={fadeIn('right', 'tween', 0.2, 1)}
				className='flex-[0.95] flex justify-center flex-col'
			>
				<TypingText
					title='| How do you develop apps?'
					textStyles='text-center'
				/>
				<TitleText title={<>Development Porcess</>} textStyles='text-center' />
			</motion.div>
			<div className='flex flex-col justify-center '>
				<div className='w-full px-4 mx-auto lg:max-w-5xl '>
					<div className='relative'>
						<div className='absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] dark:bg-gray-700 lg:block left-1/2'></div>
						<div className='space-y-2 lg:space-y-4'>
							<motion.div variants={planetVariants('left')}>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-start w-full mx-auto'>
										<div className='w-full lg:w-1/2 lg:pr-8'>
											<div className='relative flex-1 mb-10 shadow-xl lg:mb-8 gradient-05 border-[1px] border-[#6a6a6a] rounded-[10px]'>
												<div className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'>
													<div className='hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900'></div>
												</div>
												<div className='relative z-20 '>
													<div className='flex flex-wrap items-center'>
														<div className='p-4 md:w-1/4 '>
															<span className='text-lg text-white text-bold font-bold'>
																Step
															</span>
															<p className='text-2xl font-bold text-white text-bold'>
																01
															</p>
														</div>
														<div className='flex-1 p-4 pr-4 border-l border-red-500'>
															<p className='mb-2 text-xl font-bold text-white'>
																Requirements Review & proposal
															</p>
															<p className='text-white'>
																A clear understanding of your app objectives,
																key goals, target audience, focus industry,
																milestones, and other critical elements.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[4px]'>
										<img src='/one.png' alt='one' className='w-8 h-8' />
									</div>
								</div>
							</motion.div>

							<motion.div variants={planetVariants('right')}>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-end w-full mx-auto'>
										<div className='w-full lg:w-1/2 lg:pl-8'>
											<div className='relative flex-1 mb-10 rounded-[10px] shadow-xl lg:mb-8 gradient-05 border-[1px] border-[#6a6a6a]'>
												<div className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4'>
													<div className='hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg'></div>
												</div>
												<div className='relative z-20 '>
													<div className='flex flex-wrap items-center'>
														<div className='p-4 md:w-1/4 '>
															<span className='text-lg text-white text-bold font-bold'>
																Step
															</span>
															<p className='text-2xl font-bold text-white text-bold'>
																02
															</p>
														</div>
														<div className='flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700'>
															<p className='mb-2 text-xl font-bold text-white'>
																Planning & Blueprints
															</p>
															<p className='text-white'>
																Develop a detailed project plan with timelines
																and milestones. Create wireframes or prototypes
																to visualize the app's structure. Define the
																technology stack and tools to be used.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[3px]'>
										<img src='/two.png' alt='two' className='w-8 h-8' />
									</div>
								</div>
							</motion.div>

							<motion.div variants={planetVariants('left')}>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-start w-full mx-auto'>
										<div className='w-full lg:w-1/2 lg:pr-8'>
											<div className='relative flex-1 mb-10 rounded-[10px] shadow-xl lg:mb-8 gradient-05 border-[1px] border-[#6a6a6a]'>
												<div className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'>
													<div className='hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900'></div>
												</div>
												<div className='relative z-20 '>
													<div className='flex flex-wrap items-center'>
														<div className='p-4 md:w-1/4 '>
															<span className='text-lg text-white font-bold'>
																Step
															</span>
															<p className='text-2xl font-bold text-white text-bold'>
																03
															</p>
														</div>
														<div className='flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700'>
															<p className='mb-2 text-xl font-bold text-white'>
																Application Design
															</p>
															<p className='text-white'>
																Design the user interface (UI) and user
																experience (UX). Create high-fidelity mockups
																and design elements. Ensure the design is
																responsive and user-friendly. Collaborate with
																designers and gather feedback
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[2px]'>
										<img src='/three.png' alt='three' className='w-8 h-8' />
									</div>
								</div>
							</motion.div>

							<motion.div variants={planetVariants('right')}>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-end w-full mx-auto'>
										<div className='w-full lg:w-1/2 lg:pl-8'>
											<div className='relative flex-1 mb-10 rounded-[10px] shadow-xl lg:mb-8 gradient-05 border-[1px] border-[#6a6a6a]'>
												<div className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4'>
													<div className='hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg'></div>
												</div>
												<div className='relative z-20 '>
													<div className='flex flex-wrap items-center'>
														<div className='p-4 md:w-1/4 '>
															<span className='text-lg text-white font-bold text-bold'>
																Step
															</span>
															<p className='text-2xl font-bold text-white text-bold'>
																04
															</p>
														</div>
														<div className='flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700'>
															<p className='mb-2 text-xl font-bold text-white'>
																Coding the App
															</p>
															<p className='text-white'>
																Develop the front-end using React.js and Next.js
																(for server-side rendering). Build the back-end
																using Express.js for API development. Implement
																the designed UI and UX. Integrate necessary
																features and functionality.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[1px]'>
										<img src='/four.png' alt='four' className='w-8 h-8' />
									</div>
								</div>
							</motion.div>
							<motion.div variants={planetVariants('left')}>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-start w-full mx-auto'>
										<div className='w-full lg:w-1/2 lg:pr-8'>
											<div className='relative flex-1 mb-10 rounded-[10px] shadow-xl lg:mb-8 gradient-05 border-[1px] border-[#6a6a6a]'>
												<div className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'>
													<div className='hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900'></div>
												</div>
												<div className='relative z-20 '>
													<div className='flex flex-wrap items-center'>
														<div className='p-4 md:w-1/4 '>
															<span className='text-lg text-white font-bold'>
																Step
															</span>
															<p className='text-2xl font-bold text-white text-bold'>
																05
															</p>
														</div>
														<div className='flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700'>
															<p className='mb-2 text-xl font-bold text-white'>
																Testing & Deployment
															</p>
															<p className='text-white'>
																Conduct thorough testing.Fix any bugs or issues
																discovered during testing. Optimize the app for
																performance and security. Prepare for
																deployment, choosing a hosting platform (e.g.,
																AWS, Heroku). Deploy the web app to a production
																environment. Monitor the app's performance and
																user feedback post-launch.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[2px]'>
										<img src='/five.png' alt='five' className='w-8 h-8' />
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	</section>
);

export default WhatsNew;

{
	/* <motion.div
				variants={planetVariants('right')}
				className={`flex-1 ${styles.flexCenter}`}
			>
				<img
					src='/whats-new.png'
					alt='get-started'
					className='w-[90%] h-[90%] object-contain'
				/>
			</motion.div> */
}

// variants={planetVariants('left')}
