import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'bg-background flex h-screen overflow-hidden antialiased font-sans',
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Sidebar />

					<div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
						<Header />

						<main>
							<div className='mx-auto max-w-screen-2xl p-4'>{children}</div>
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
