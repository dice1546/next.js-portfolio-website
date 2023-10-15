import { Footer, Navbar } from '../../components';
import {
	Feedback,
	GetStarted,
	Insights,
	PreviousWork,
	Testimonials,
} from '../../sections';

const Blog = () => {
	return (
		<div className='bg-primary-black overflow-hidden'>
			<Navbar />
			<Testimonials />
			<GetStarted />
			<div className='relative'>
				<div className='gradient-04 z-0' />
				<PreviousWork />
			</div>
			<Footer />
		</div>
	);
};
export default Blog;
