import { Payment, columns } from '@/components/columns'
import DataTable from '@/components/data-table'
import { PaginationComponent } from '@/components/paginationComponent'

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			amount: 100,
			status: 'pending',
			email: 'm@example.com',
		}, {
			id: '728ed52g',
			amount: 200,
			status: 'processing',
			email: '',
		}, {
			id: '728ed52h',
			amount: 300,
			status: 'success',
			email: '',
		}
	]
}
export default async function Home() {
	const data = await getData()
	return (
		<div className='container mx-auto py-10 flex flex-col justify-between h-screen'>
			<DataTable columns={columns} data={data} />
		</div>
	)
}
