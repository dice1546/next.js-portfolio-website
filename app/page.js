import { Footer, Navbar } from '../components';
import {
	About,
	Explore,
	Feedback,
	GetStarted,
	Hero,
	Insights,
	WhatsNew,
	World,
	PreviousWork,
	Testimonials,
} from '../sections';

const Page = () => (
	<div className='bg-primary-black overflow-hidden'>
		<Navbar />
		<Hero />
		<div className='relative'>
			<About />
			<div className='gradient-03 z-0' />
			<Explore />
		</div>
		<div className='relative'>
			<PreviousWork />
			<GetStarted />
			<div className='gradient-04 z-0' />
			<WhatsNew />
		</div>
		<Testimonials />
		<div className='relative'>
			<Insights />
			<div className='gradient-04 z-0' />
			<Feedback />
		</div>
		<Footer />
	</div>
);

export default Page;
