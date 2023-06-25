import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tobenna portfolio',
	description: 'Portfolio of Umeh Tobenna a Front-End React developer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex justify-center'>
					<Link
						className='mx-4 my-3 group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30:'
						href='/'
					>
						Home
					</Link>
					<Link
						className='mx-4 my-3 group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30:'
						href='/about'
					>
						About
					</Link>
					<Link
						className='mx-4 my-3 group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30:'
						href='/about/clients'
					>
						Clients
					</Link>
					<Link
						className='mx-4 my-3 group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30:'
						href='/about/clients'
					>
						Featured works
					</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
