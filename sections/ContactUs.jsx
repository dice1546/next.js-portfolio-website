'use client';

import { useState } from 'react'; // Import React and useState
import emailjs from '@emailjs/browser'; // Import the emailjs library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
	const showToastMessage = () => {
		toast.success(
			'Thank you for contacting. I will get back to you at the earliest!',
			{
				position: toast.POSITION.TOP_RIGHT,
			}
		);
	};
	const [firstName, setFirstName] = useState('');
	const [secondName, setSecondName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = () => {
		const templateParams = {
			to_firstName: firstName,
			to_secondName: secondName,
			to_email: email,
			to_subject: subject,
			to_message: message,
		};

		emailjs
			.send(
				'service_ir5uodp',
				'template_85cth58',
				templateParams,
				'S6nOi3Z6ZUKKiRTVq'
			)
			.then((response) => {
				console.log('Email sent successfully:', response);
				// setEmail('');
				// setFirstName('');
				// setSecondName('');
				// setSubject('');
				// setMessage('');
			})
			.catch((error) => {
				console.error('Error sending email:', error);
				// Handle errors here
			});
	};

	return (
		<section className='flex items-center py-16 font-poppinsbg-gray-800'>
			<ToastContainer />
			<div className='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6'>
				<div className='max-w-2xl px-3 py-6 mx-auto rounded shadow bg-gray-700 z-20'>
					<div className='flex justify-center p-4 mx-10 mb-6 text-gray-100 bg-blue-500 rounded-md -mt-14 '>
						<h2 className='text-lg font-semibold text-center md:text-2xl'>
							Contact Me
						</h2>
					</div>
					<div className='mt-8'>
						<form action='' className=''>
							<div className='flex flex-wrap mb-6'>
								<div className='w-full px-3 md:w-1/2 md:mb-0'>
									<label
										htmlFor='firstname'
										className='block mb-2 font-bold uppercase text-gray-400'
									>
										First Name
									</label>
									<input
										type='text'
										value={firstName}
										placeholder='first name'
										required
										onChange={(e) => setFirstName(e.target.value)}
										className='block w-full px-4 py-3 mb-3 leading-tight  border rounded lg:mb-0 text-gray-400 border-gray-800 bg-gray-800 '
									/>
								</div>
								<div className='w-full px-3 md:w-1/2 md:mb-0'>
									<label
										htmlFor='firstname'
										className='block mb-2 font-bold  uppercase text-gray-400'
									>
										Last Name
									</label>
									<input
										type='text'
										placeholder='last name'
										required
										value={secondName}
										onChange={(e) => setSecondName(e.target.value)}
										className='block w-full px-4 py-3 mb-3 leading-tight  border rounded placeholder-gray-500 lg:mb-0 text-gray-400 border-gray-800 bg-gray-800 '
									/>
								</div>
							</div>
							<div className='px-3 mb-6'>
								<label
									htmlFor='firstname'
									className='block mb-2 font-bold  uppercase text-gray-400'
								>
									Email
								</label>
								<input
									type='text'
									value={email}
									placeholder='abc@gmail.com'
									required
									onChange={(e) => setEmail(e.target.value)}
									className='block w-full px-4 py-3 mb-3 leading-tight  border rounded  placeholder-gray-500 text-gray-400 border-gray-800 bg-gray-800 '
								/>
							</div>
							<div className='px-3 mb-6'>
								<label
									htmlFor='subject'
									className='block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400'
								>
									Subject
								</label>
								<input
									type='text'
									value={subject}
									placeholder="I'm asking information for..."
									required
									onChange={(e) => setSubject(e.target.value)}
									className='block w-full px-4 py-3 mb-3 leading-tight  border rounded  placeholder-gray-500 text-gray-400 border-gray-800 bg-gray-800 '
								/>
							</div>
							<div className='px-3 mb-6'>
								<label
									htmlFor='message'
									className='block mb-2 font-bold  uppercase text-gray-400'
								>
									Message
								</label>
								<textarea
									rows='4'
									type='message'
									value={message}
									placeholder='Describe your problem'
									required
									onChange={(e) => setMessage(e.target.value)}
									className='block w-full px-4 leading-tight  border rounded  placeholder-gray-500 py-7 text-gray-400 border-gray-800 bg-gray-800 '
								></textarea>
							</div>
							<div className='px-3'>
								<div className='flex justify-center'>
									<button
										onClick={() => {
											sendEmail();
											showToastMessage();
										}}
										className='px-4 py-2 font-medium text-gray-100 rounded shadow  bg-blue-500 hover:bg-blue-700'
									>
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ContactUs;
