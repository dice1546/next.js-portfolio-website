import { Footer, Navbar } from '../../components';
import { ContactUs, Insights, Testimonials } from '../../sections';

const Contact = () => {
	return (
		<div className='bg-primary-black overflow-hidden'>
			<Navbar />
			<ContactUs />
			<Testimonials />
			<div className='relative'>
				<Insights />
				<div className='gradient-04 z-0' />
			</div>
			<Footer />
		</div>
	);
};
export default Contact;
