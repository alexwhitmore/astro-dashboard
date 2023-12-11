import { Card, DonutChart, Title } from '@tremor/react'

const totalSales = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },
  {
    name: 'San Francisco',
    sales: 2400,
  },
  {
    name: 'Singapore',
    sales: 1908,
  },
  {
    name: 'Zurich',
    sales: 1398,
  },
]

const totalCustomers = [
  {
    name: 'Canada',
    number: 56,
  },
  {
    name: 'United Kingdom',
    number: 24,
  },
  {
    name: 'Australia',
    number: 19,
  },
  {
    name: 'United States',
    number: 187,
  },
]

const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat('us').format(number).toString()}`

const numberFormatter = (number: number) => new Intl.NumberFormat('us').format(number).toString()

export function PieChart() {
  return (
    <>
      <Card className='w-full'>
        <Title>Sales</Title>
        <DonutChart
          className='mt-6'
          data={totalSales}
          category='sales'
          index='name'
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </Card>
      <Card className='w-full'>
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
    </>
  )
}
