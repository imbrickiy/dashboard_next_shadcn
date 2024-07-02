import Link from 'next/link'
import ToggleChangeTheme from './ToggleChangeTheme'
import { Icons } from './icons'

const Header = () => {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container h-14 max-w-screen-2xl flex items-center'>
				<div className='flex items-center justify-between w-full'>
					<div className='mr-4 hidden md:flex'>
						<Link href='/' className='mr-6 flex items-center'>
							<Icons.logo />
							<span className='hidden font-bold sm:inline-block'>
								shadcn/ui
							</span>
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
					<div className='mr-4'>
						<ToggleChangeTheme />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
