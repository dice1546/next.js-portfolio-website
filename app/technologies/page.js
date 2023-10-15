import { Footer, Navbar } from '../../components';
import { Insights, ModernTech, Testimonials } from '../../sections';

const Technologies = () => {
	return (
		<div className='bg-primary-black overflow-hidden'>
			<Navbar />
			<ModernTech />
			<Testimonials />
			<div className='relative'>
				<Insights />
				<div className='gradient-04 z-0' />
			</div>
			<Footer />
		</div>
	);
};
export default Technologies;
