import { AreaChart, Card, Title } from '@tremor/react'

const chartdata = [
  {
    date: 'Jan 23',
    2023: 2890,
    '2022': 2338,
  },
  {
    date: 'Feb 23',
    2023: 2756,
    '2022': 2103,
  },
  {
    date: 'Mar 23',
    2023: 3323,
    '2022': 2194,
  },
  {
    date: 'Apr 23',
    2023: 3470,
    '2022': 2108,
  },
  {
    date: 'May 23',
    2023: 3475,
    '2022': 1812,
  },
  {
    date: 'Jun 23',
    2023: 3129,
    '2022': 1726,
  },
]

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString()
}

export function AreaCharts() {
  return (
    <Card>
      <Title>6 month revenue comparison</Title>
      <AreaChart
        className='h-72 mt-4'
        data={chartdata}
        index='date'
        categories={['2023', '2022']}
        colors={['green', 'blue']}
        valueFormatter={valueFormatter}
      />
    </Card>
  )
}
