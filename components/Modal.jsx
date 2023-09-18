export default function Modal({ open, onClose, children }) {
	return (
		<div
			onClick={onClose}
			className={`fixed z-50 inset-0 flex flex-wrap overflow-y-auto overflow-x-hidden justify-center items-center transition-colors 
        ${open ? 'visible bg-primary-black' : 'invisible'}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`bg-black rounded-xl shadow p-6 transition-all ${
					open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
				}`}
			>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 p-1 
                rounded-lg text-gray-400 bg-transparent'
				>
					<img src='/closemodal.svg' alt='close' className='h-8 w-8' />
				</button>
				{children}
			</div>
		</div>
	);
}
