import { Card, DonutChart, Title } from '@tremor/react'

const totalSalesByCountry = [
  { name: 'United States', sales: 20000 },
  { name: 'United Kingdom', sales: 10000 },
  { name: 'Canada', sales: 7000 },
  { name: 'Australia', sales: 5000 },
  { name: 'Germany', sales: 4000 },
  { name: 'France', sales: 3000 },
  { name: 'Japan', sales: 2000 },
]

const totalCustomers = [
  { name: 'Canada', number: 56 },
  { name: 'United Kingdom', number: 24 },
  { name: 'Australia', number: 19 },
  { name: 'United States', number: 187 },
]

const totalSalesByCategory = [
  { name: 'Electronics', sales: 15000 },
  { name: 'Clothing', sales: 12000 },
  { name: 'Home & Garden', sales: 8000 },
  { name: 'Beauty & Health', sales: 5000 },
  { name: 'Sports & Outdoors', sales: 4000 },
  { name: 'Books', sales: 3000 },
  { name: 'Other', sales: 2000 },
]

const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const numberFormatter = (number: number) => new Intl.NumberFormat('us').format(number).toString()

export function PieChart() {
  return (
    <>
      <Card className='w-full md:min-w-[300px] px-10'>
        <Title>Total sales</Title>
        <DonutChart
          className='mt-6'
          data={totalSalesByCountry}
          category='sales'
          index='name'
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber', 'green']}
        />
      </Card>
      <Card className='w-full md:min-w-[300px]'>
        <Title>Total customers by country</Title>
        <DonutChart
          className='mt-6'
          data={totalCustomers}
          category='number'
          index='name'
          valueFormatter={numberFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </Card>
      <Card className='w-full md:min-w-[300px]'>
        <Title>Sales categories</Title>
        <DonutChart
          className='mt-6'
          data={totalSalesByCategory}
          category='sales'
          index='name'
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber', 'green']}
        />
      </Card>
    </>
  )
}
