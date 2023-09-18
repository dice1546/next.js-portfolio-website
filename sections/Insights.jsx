'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

const Insights = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'insights'));
				const documents = [];
				querySnapshot.forEach((doc) => {
					// Extract specific fields from the document
					const { id, title, subtitle, imgUrl } = doc.data();
					documents.push({ id: doc.id, title, subtitle, imgUrl });
				});
				setData(documents);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title='| Insights' textStyles='text-center' />
				<TitleText
					title='Blog - Guides For Best Practices'
					textStyles='text-center'
				/>
				<div className='mt-[50px] flex flex-col gap-[30px]'>
					{data.map((insight) => (
						<InsightCard
							key={`insight-${insight.id}`}
							{...insight}
							index={insight.id + 1}
						/>
					))}
				</div>
			</motion.div>
			<motion.div
				variants={fadeIn('up', 'tween', 0.6, 1)}
				className='flex justify-center items-center'
			>
				<motion.button
					type='button'
					className='flex items-center z-10 text-white mt-10 h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] outline-none transition-colors duration-300 hover:bg-gradient-to-r from-green-300 to-brown-300 hover:text-black'
				>
					<span className='font-normal text-[16px] text-white'>View More</span>
					<img
						src='/forward.svg'
						alt='headset'
						className='w-[24px] h-[24px] object-contain'
					/>
				</motion.button>
			</motion.div>
		</section>
	);
};

export default Insights;
