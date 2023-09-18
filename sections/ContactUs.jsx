const ContactUs = () => {
	return (
		<section class='flex items-center py-16 font-poppinsbg-gray-800'>
			<div class='justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6'>
				<div class='max-w-2xl px-3 py-6 mx-auto rounded shadow bg-gray-700 z-20'>
					<div class='flex justify-center p-4 mx-10 mb-6 text-gray-100 bg-blue-500 rounded-md -mt-14 '>
						<h2 class='text-lg font-semibold text-center md:text-2xl'>
							Contact Me
						</h2>
					</div>
					<div class='mt-8'>
						<form action='' class=''>
							<div class='flex flex-wrap mb-6'>
								<div class='w-full px-3 md:w-1/2 md:mb-0'>
									<label
										for='firstname'
										class='block mb-2 font-bold uppercase text-gray-400'
									>
										First Name
									</label>
									<input
										type='text'
										placeholder='first name'
										required
										class='block w-full px-4 py-3 mb-3 leading-tight  border rounded lg:mb-0 text-gray-400 border-gray-800 bg-gray-800 '
									/>
								</div>
								<div class='w-full px-3 md:w-1/2 md:mb-0'>
									<label
										for='firstname'
										class='block mb-2 font-bold  uppercase text-gray-400'
									>
										Last Name
									</label>
									<input
										type='text'
										placeholder='last name'
										required
										class='block w-full px-4 py-3 mb-3 leading-tight  border rounded placeholder-gray-500 lg:mb-0 text-gray-400 border-gray-800 bg-gray-800 '
									/>
								</div>
							</div>
							<div class='px-3 mb-6'>
								<label
									for='firstname'
									class='block mb-2 font-bold  uppercase text-gray-400'
								>
									Email
								</label>
								<input
									type='text'
									placeholder='abc@gmail.com'
									required
									class='block w-full px-4 py-3 mb-3 leading-tight  border rounded  placeholder-gray-500 text-gray-400 border-gray-800 bg-gray-800 '
								/>
							</div>
							<div class='px-3 mb-6'>
								<label
									for='firstname'
									class='block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400'
								>
									Subject
								</label>
								<input
									type='text'
									placeholder="I'm asking information for..."
									required
									class='block w-full px-4 py-3 mb-3 leading-tight  border rounded  placeholder-gray-500 text-gray-400 border-gray-800 bg-gray-800 '
								/>
							</div>
							<div class='px-3 mb-6'>
								<label
									for='firstname'
									class='block mb-2 font-bold  uppercase text-gray-400'
								>
									Message
								</label>
								<textarea
									rows='4'
									type='message'
									placeholder='Describe your problem'
									required
									class='block w-full px-4 leading-tight  border rounded  placeholder-gray-500 py-7 text-gray-400 border-gray-800 bg-gray-800 '
								></textarea>
							</div>
							<div class='px-3'>
								<div class='flex justify-center'>
									<button class='px-4 py-2 font-medium text-gray-100 rounded shadow  bg-blue-500 hover:bg-blue-700'>
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
