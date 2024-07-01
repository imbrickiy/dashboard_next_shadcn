import Link from 'next/link'
import ToggleChangeTheme from './ToggleChangeTheme'
import { Icons } from './icons'

const Header = () => {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<div className='mr-4 hidden md:flex'>
					<Link href='/' className='mr-6 flex items-center space-x-2'>
						<Icons.logo />
						<span className='hidden font-bold sm:inline-block'>shadcn/ui</span>
					</Link>
				</div>
				<nav className='flex items-center gap-4 text-sm lg:gap-6'>
					<Link
						className='transition-colors hover:text-foreground/80 text-foreground/60'
						href='/docs'
					>
						Docs
					</Link>
				</nav>
				<div className='w-full flex-1 md:w-auto md:flex-none'></div>
				<div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
					<div className='flex items-center'>
						<ToggleChangeTheme />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
