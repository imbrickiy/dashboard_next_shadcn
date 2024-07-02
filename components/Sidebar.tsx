'use client'
import { cn } from '@/lib/utils'
import { CalendarIcon, FolderIcon, Inbox, Plus, Table, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const navigation = [
	{ name: 'Dashboard', href: '/', icon: Plus, current: true },
	{ name: 'Table', href: '/team', icon: Table, current: false },
	{ name: 'Projects', href: '/project', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
]

export default function Home() {
	const path = usePathname()
	if (typeof path !== 'string') return null
	return (
		<div className='flex h-screen border-r'>
			<div className='flex-1 flex flex-col overflow-y-auto items-center'>
				<nav className=' mt-16'>
					{navigation.map(item => (
						<Link
							key={item.name}
							href={item.href}
							className='flex items-center p-2'
						>
							<div
								className={cn(
									' w-9 h-9 rounded-md flex items-center justify-center  hover:bg-gray-100 transition-colors duration-200',
									path === item.href &&'bg-black hover:bg-black'
								)}
							>
								<item.icon
									className={cn(
										'flex-shrink-0 h-4 w-4 text-gray-400',
									path === item.href &&'bg-black text-white'
									)}
								/>
							</div>
						</Link>
					))}
				</nav>
			</div>
		</div>
	)
}
