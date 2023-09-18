import { Footer, Navbar } from '../../components';
import { Insights, Testimonials, PreviousWorkExpanded } from '../../sections';

const Projects = () => {
	return (
		<div className='bg-primary-black overflow-hidden'>
			<Navbar />
			<PreviousWorkExpanded />
			<Testimonials />
			<div className='relative'>
				<Insights />
				<div className='gradient-04 z-0' />
			</div>
			<Footer />
		</div>
	);
};
export default Projects;
