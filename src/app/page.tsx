import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-24'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='text-4xl font-bold text-center'>
					Hi, I&apos;m Tobenna Umeh
				</h1>
				<h2 className='text-2xl font-bold text-center'>
					I&apos;m a Front-End React developer
				</h2>
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<Image
					src='/images/hero.svg'
					alt='hero'
					width={500}
					height={500}
					className='object-contain'
				/>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<h3 className='text-2xl font-bold text-center'>
					I build beautiful and functional websites
				</h3>
				<h4 className='text-xl font-bold text-center'>
					I&apos;m currently available for hire
				</h4>

				<div className='flex flex-col items-center justify-center'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Hire me
					</button>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						See my work
					</button>
				</div>
			</div>
		</main>
	);
}
