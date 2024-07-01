'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ToggleChangeTheme = () => {
	const { theme, setTheme } = useTheme()
	return (
		<Button
			variant='outline'
			size='icon'
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark')
			}}
			className='h-9 py-2 w-9 px-0 border-none'
		>
			<Sun className='h-[0.938rem] w-[0.938rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
			<Moon className='absolute h-[0.938rem] w-[0.938rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}

export default ToggleChangeTheme
