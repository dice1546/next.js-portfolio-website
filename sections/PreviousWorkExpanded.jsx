'use client';

import styles from '../styles';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

const PreviousWorkExpanded = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'portfolioall'));
				const documents = [];
				querySnapshot.forEach((doc) => {
					// Extract specific fields from the document
					const { id, name, text, imgUrl } = doc.data();
					documents.push({ id: doc.id, name, text, imgUrl });
				});
				setData(documents);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<section className={`${styles.paddings}`} id='explore'>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col items-center py-20 font-poppins`}
			>
				<TypingText title='| The Portfolio' textStyles='text-center' />
				<TitleText
					title={<>Successfully Completed Projects</>}
					textStyles='text-center'
				/>

				<motion.div
					variants={fadeIn('up', 'tween', 0.3, 1)}
					className='container p-4 mx-auto'
				>
					<div className='mx-auto mb-10 border-b w-44 border-gray-400'></div>

					<div className='grid grid-cols-1 mt-8 lg:grid-cols-4 md:grid-cols-2'>
						{data.map((item) => (
							<div
								key={item.id}
								className='relative overflow-hidden shadow-lg group'
							>
								<img
									src={item.imgUrl}
									className='group-hover:origin-center ml-2 group-hover:scale-105 rounded-2xl transition inset-0 object-cover object-center  duration-500 w-full h-[350px]'
									alt=''
								/>
								<div className='absolute inset-0 z-0 group-hover:bg-black opacity-70'></div>
								<div className='absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block'>
									<a
										href='#'
										className='mb-2 text-2xl font-semibold text-white'
									>
										{item.name}
									</a>
									<h2 className='mb-0 text-sm font-light text-white'>
										{item.text}
									</h2>
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};
export default PreviousWorkExpanded;
