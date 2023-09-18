'use client';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { Modal, TitleText, TypingText } from '../components';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

const Testimonials = () => {
	const [open, setOpen] = useState(false);

	const [data, setData] = useState([]);

	const [showFullText, setShowFullText] = useState(false);

	const toggleFullText = () => {
		setShowFullText(!showFullText);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'testimonials'));
				const documents = [];
				querySnapshot.forEach((doc) => {
					// Extract specific fields from the document
					const { id, name, text, imgUrl, companyName } = doc.data();
					documents.push({ id: doc.id, name, text, imgUrl, companyName });
				});
				setData(documents);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={`${styles.paddings} relative`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
			>
				<TypingText title='| Testimonials' textStyles='text-center' />
				<TitleText title='What People Say About Me' textStyles='text-center' />

				<div className='p-4 mx-auto max-w-7xl'>
					<div className='flex '>
						<div className='grid grid-cols-1 mt-10 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									variants={fadeIn('up', 'spring', 0.5, 1)}
									className='mb-8 bg-white shadow gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]'
								>
									<div className='relative z-20 p-8'>
										<div className='flex items-center mb-5 gap-x-4'>
											<div className='relative w-24 h-24 rounded-full'>
												<span className='absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full '>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-quote'
														viewBox='0 0 16 16'
													>
														<path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
													</svg>
												</span>
												<img
													className='object-cover w-full h-full rounded-full'
													src={testimonial.imgUrl}
													alt=''
												/>
											</div>
											<div className='info'>
												<h2 className='text-lg font-bold text-black dark:text-white'>
													{testimonial.name}
												</h2>
												<span className='block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300'>
													{testimonial.company}
												</span>
												<span className='flex mt-2 text-orange-500 gap-x-0.5'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
												</span>
											</div>
										</div>
										<div>
											<p
												className={`mb-4 text-base leading-7 text-gray-400 ${
													showFullText ? '' : 'truncate'
												}`}
											>
												{showFullText
													? testimonial.text
													: `${testimonial.text.slice(0, 120)}...`}
											</p>
											<div>
												<button
													onClick={toggleFullText}
													className='text-blue-300 hover:underline'
												>
													{showFullText ? 'Read Less' : 'Read More'}
												</button>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
				<motion.button
					variants={fadeIn('up', 'tween', 0.6, 1)}
					type='button'
					onClick={() => setOpen(true)}
					className='flex items-center z-10 text-white mt-3 h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] outline-none transition-colors duration-300 hover:bg-gradient-to-r from-green-300 to-brown-300 hover:text-black hover:scale-105'
				>
					<span className='font-normal text-[16px] text-white'>View All</span>
					<img
						src='/forward.svg'
						alt='headset'
						className='w-[24px] h-[24px] object-contain'
					/>
				</motion.button>
			</motion.div>
			<Modal open={open} onClose={() => setOpen(false)}>
				<div className='p-4 mx-auto max-w-7xl z-50'>
					<div className='flex '>
						<div className='grid grid-cols-1 mt-10 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3'>
							{data.map((document) => (
								<motion.div
									key={document.id}
									variants={fadeIn('up', 'spring', 0.5, 1)}
									className='mb-8 bg-white shadow gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a]'
								>
									<div className='relative z-20 p-8'>
										<div className='flex items-center mb-5 gap-x-4'>
											<div className='relative w-24 h-24 rounded-full'>
												<span className='absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full '>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-quote'
														viewBox='0 0 16 16'
													>
														<path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
													</svg>
												</span>
												<img
													className='object-cover w-full h-full rounded-full'
													src={document.imgUrl}
													alt=''
												/>
											</div>
											<div className='info'>
												<h2 className='text-lg font-bold text-black dark:text-white'>
													{document.name}
												</h2>
												<span className='block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300'>
													{document.companyName}
												</span>
												<span className='flex mt-2 text-orange-500 gap-x-0.5'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star-fill'
														viewBox='0 0 16 16'
													>
														<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
													</svg>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='14'
														height='14'
														fill='currentColor'
														className='bi bi-star'
														viewBox='0 0 16 16'
													>
														<path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
													</svg>
												</span>
											</div>
										</div>
										<p className='mb-4 text-base leading-7 text-gray-400'>
											{document.text}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</Modal>
		</section>
	);
};
export default Testimonials;
