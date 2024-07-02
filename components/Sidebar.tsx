'use client'
import { cn } from '@/lib/utils'
import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from 'lucide-react'
import { useState } from 'react'
import { Icons } from './icons'
import { Button } from './ui/button'

const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{ name: 'Team', href: '#', icon: UsersIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
]

export default function Home() {
	const defaultLayout = [265, 440, 655]
	const defaultCollapsed = false
	const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
	return (
		<div className='flex h-screen border-r'>
			<div className='flex-1 flex flex-col overflow-y-auto items-center '>
				<Icons.tailwind className='size-8 m-3' />
				<nav className='p-2 space-y-1'>
					{navigation.map(item => (
						<Button
							key={item.name}
							variant={'ghost'}
							className={cn(
								'group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md',
								{
									'bg-gray-100': item.current,
								}
							)}
						>
							<item.icon
								className={cn(
									'flex-shrink-0 h-6 w-6 text-gray-300 group-hover:text-gray-500'
								)}
								aria-hidden='true'
							/>
						</Button>
					))}
				</nav>
			</div>
		</div>
	)
}
