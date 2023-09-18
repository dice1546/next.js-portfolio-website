'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
	const [active, setActive] = useState('world-2');

	return (
		<section className={`${styles.paddings}`} id='explore'>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title='| Mastering Modern Tech' textStyles='text-center' />
				<TitleText
					title={
						<>
							Built Upon the Modern & <br className='md:block hidden' /> Latest
							Technologies
						</>
					}
					textStyles='text-center z-10'
				/>
				<div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Explore;
