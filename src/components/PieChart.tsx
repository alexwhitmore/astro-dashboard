import { Card, DonutChart, Title } from '@tremor/react'

const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat('us').format(number).toString()}`

export function PieChart({ title, data, category, valueFormatter, ...props }) {
  return (
    <Card className='w-full'>
      <Title>{title}</Title>
      <DonutChart
        className='mt-6'
        data={data}
        category={category}
        index='name'
        valueFormatter={valueFormatter}
        {...props}
        colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
      />
    </Card>
  )
}
